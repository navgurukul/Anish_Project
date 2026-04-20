import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());

const getRazorpayClient = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret
  });
};

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/create-order', async (req, res) => {
  try {
    const amount = Number(req.body.amount);

    if (!amount || Number.isNaN(amount) || amount < 1) {
      return res.status(400).json({ message: 'A valid donation amount is required.' });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({ message: 'Razorpay keys are not configured.' });
    }

    const razorpay = getRazorpayClient();
    if (!razorpay) {
      return res.status(500).json({ message: 'Razorpay initialization failed due to missing keys.' });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `ajmf_${Date.now()}`
    });

    return res.json({
      order,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Unable to create Razorpay order.'
    });
  }
});

app.post('/api/verify-payment', (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: 'Missing payment verification data.' });
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({ message: 'Razorpay key secret is not configured.' });
    }

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: 'Invalid payment signature.' });
    }

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Payment verification failed.'
    });
  }
});

app.listen(port, () => {
  console.log(`Razorpay server running on http://localhost:${port}`);
});