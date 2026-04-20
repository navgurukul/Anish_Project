import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { 
  Landmark, Copy, Check, 
  ShieldCheck 
} from 'lucide-react';
import styles from './Donate.module.css'; 

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Donate = () => {
  const [activeTab, setActiveTab] = useState('bank'); 
  const [copiedField, setCopiedField] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState('₹1,000');
  const [paymentState, setPaymentState] = useState({ status: 'idle', message: '' });

  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(true));
        existingScript.addEventListener('error', () => resolve(false));
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getSelectedAmountValue = () => Number(selectedAmount.replace(/[^\d]/g, ''));

  const handleGatewayPayment = async () => {
    try {
      setPaymentState({ status: 'loading', message: 'Preparing secure checkout...' });

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay checkout script could not be loaded.');
      }

      const amount = getSelectedAmountValue();
      const createOrderResponse = await fetch(`${apiBaseUrl}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount })
      });

      if (!createOrderResponse.ok) {
        const errorData = await createOrderResponse.json().catch(() => ({}));
        throw new Error(errorData.message || 'Unable to create Razorpay order.');
      }

      const { order, keyId } = await createOrderResponse.json();

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Anish Jadhav Memorial Foundation',
        description: `Donation of ${selectedAmount}`,
        order_id: order.id,
        theme: {
          color: '#004d99'
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        handler: async (response) => {
          try {
            const verifyResponse = await fetch(`${apiBaseUrl}/api/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(response)
            });

            const verifyData = await verifyResponse.json();
            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(verifyData.message || 'Payment verification failed.');
            }

            setPaymentState({
              status: 'success',
              message: 'Payment successful. Thank you for your donation.'
            });
          } catch (error) {
            setPaymentState({
              status: 'error',
              message: error.message || 'Payment completed, but verification failed.'
            });
          }
        },
        modal: {
          ondismiss: () => {
            setPaymentState({
              status: 'idle',
              message: 'Payment window closed.'
            });
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', (response) => {
        setPaymentState({
          status: 'error',
          message: response.error?.description || 'Payment failed. Please try again.'
        });
      });
      paymentObject.open();
    } catch (error) {
      setPaymentState({
        status: 'error',
        message: error.message || 'Unable to open secure payment.'
      });
    }
  };

  const donationAmounts = [
    { amount: "₹100", label: "Supporter" },
    { amount: "₹500", label: "Friend" },
    { amount: "₹1,000", label: "Patron" },
    { amount: "₹2,500", label: "Guardian" },
    { amount: "₹5,000", label: "Hero" },
    { amount: "₹10,000", label: "Champion" },
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* --- NEW HERO SECTION (No Image, Just Gradient & Text) --- */}
      <section className={styles.heroSection}>
        
        {/* Abstract Blurred Text Background */}
        <div className={styles.heroBackgroundText}>
           <span>GIVING</span>
           <span>HOPE</span>
        </div>

        <div className={styles.heroContent}>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className={styles.heroTitle}
          >
            Empower a Future. <br /><span className={styles.goldText}>Donate Today.</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp}
            className={styles.heroSubtitle}
          >
            Your contribution, no matter the size, directly supports the education and well-being of underprivileged students.
          </motion.p>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* LEFT COLUMN: Information */}
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.impactBadge}>
              <ShieldCheck size={20} />
              <span>Tax Benefits Available</span>
            </div>
            
            <h2 className={styles.sectionHeading}>Make a Direct Impact</h2>
            <p className={styles.text}>
              We believe in transparency. Since we are a non-profit organization, we utilize direct bank transfers and UPI to ensure 100% of your donation reaches the cause without platform fees.
            </p>

            <div className={styles.taxNoteBox}>
              <h4 className={styles.taxTitle}>80G Tax Exemption</h4>
              <p className={styles.taxText}>
                Any amount donated to NavGurukul / AJMF is eligible for tax exemption under Section 80G of the Income Tax Act. 
                <br/><br/>
                <strong>Note:</strong> After making a donation, please email the transaction details to 
                <span className={styles.emailHighlight}> jadhav_kl@yahoo.co.in</span> to receive your tax receipt.
              </p>
            </div>

            <h3 className={styles.subHeading}>Suggested Contributions</h3>
            <div className={styles.amountGrid}>
              {donationAmounts.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.amountCard} ${selectedAmount === item.amount ? styles.amountCardActive : ''}`}
                  onClick={() => setSelectedAmount(item.amount)}
                >
                  <div className={styles.amountValue}>{item.amount}</div>
                  <div className={styles.amountLabel}>{item.label}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Payment Card */}
          <motion.div 
            className={styles.paymentColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.donationCard}>
              <div className={styles.cardHeader}>
                <h3>Payment Details</h3>
                <p>Choose your preferred method</p>
              </div>

              {/* Tabs */}
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'bank' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('bank')}
                >
                  <Landmark size={18} /> Bank Transfer
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'gateway' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('gateway')}
                >
                  <ShieldCheck size={18} /> Payment Gateway
                </button>
              </div>

              {/* TAB CONTENT: BANK */}
              {activeTab === 'bank' && (
                <div className={styles.tabContent}>
                  <div className={styles.detailRow}>
                    <label>Account Name</label>
                    <div className={styles.copyWrapper}>
                      <span>Anish Jadhav Memorial Foundation</span>
                      <button type="button" onClick={() => handleCopy('Anish Jadhav Memorial Foundation', 'name')}>
                        {copiedField === "name" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>Account Number</label>
                    <div className={styles.copyWrapper}>
                      <span>02520110052655</span>
                      <button type="button" onClick={() => handleCopy('02520110052655', 'acc')}>
                        {copiedField === "acc" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>IFSC Code</label>
                    <div className={styles.copyWrapper}>
                      <span>UCBA0000252</span>
                      <button type="button" onClick={() => handleCopy('UCBA0000252', 'ifsc')}>
                        {copiedField === "ifsc" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>Bank Name</label>
                    <div className={styles.staticValue}>UCO Bank
Branch :Yerwada, Pune, Maharashtra</div>
                  </div>

                  <p className={styles.helperText}>
                    This option keeps the current direct transfer flow. You can still choose a suggested amount and copy the bank details quickly.
                  </p>
                </div>
              )}

              {/* TAB CONTENT: GATEWAY */}
              {activeTab === 'gateway' && (
                <div className={styles.tabContent}>
                  <div className={styles.gatewayBox}>
                    <h4 className={styles.gatewayTitle}>Gateway-ready donation flow</h4>
                    <p className={styles.gatewayText}>
                      The selected amount <strong>{selectedAmount}</strong> will be used when opening Razorpay checkout.
                    </p>
                    <ul className={styles.gatewayList}>
                      <li>Choose a predefined amount above.</li>
                      <li>Open secure checkout.</li>
                      <li>Receive success or failure response after payment.</li>
                    </ul>
                    <button
                      type="button"
                      className={styles.checkoutBtn}
                      onClick={handleGatewayPayment}
                      disabled={paymentState.status === 'loading'}
                    >
                      {paymentState.status === 'loading' ? 'Opening Checkout...' : `Proceed to Secure Payment (${selectedAmount})`}
                    </button>
                    <p className={`${styles.gatewayStatus} ${styles[paymentState.status] || ''}`}>
                      {paymentState.message}
                    </p>
                    <p className={styles.gatewayNote}>
                      Actual gateway keys and backend order creation are needed to make this live.
                    </p>
                  </div>
                </div>
              )}


            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Donate;