import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Mission.module.css';

// Images
import FoundationImage from '../assets/AJMF_0324.jpg'; 
import campusImg25 from '../assets/partnershipSign.png';

// --- Animation Variants ---
const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const MissionVisionSection = () => {
    return (
        <section className={styles.missionVisionSection}>
            <div className={styles.cardsContainer}>
                <motion.div
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>MISSION</h2>
                    <p className={styles.cardText}>
                        Anish Jadhav Memorial Foundation aims to enhance employment opportunities and entrepreneurship through various social and educational programs that promote skill development.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>VISION</h2>
                    <p className={styles.cardText}>
                        To enable a dignified life for underprivileged communities by focusing on skill development, capacity building, and sustainable growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const FounderSection = () => {
    return (
        <section id="trustee" className={styles.founderSection}>
            <div className={styles.founderContainer}>
                <div className={styles.founderImageContainer}>
                    <img src={FoundationImage} alt="Brigadier (Dr) Kishor Jadhav" className={styles.founderImage} />
                </div>
                <div className={styles.founderInfo}>
                    <h2 className={styles.founderNameTitle}>Brigadier (Dr) Kishor Jadhav</h2>
                    <p className={styles.founderRole}>Founder of Anish Jadhav Memorial Foundation</p>
                    <p className={styles.founderDescription}>
                        The Anish Jadhav Memorial Foundation was established by his parents Brigadier Kishor Jadhav and Mrs. Neeta Jadhav in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build aspiration careers and meaningful lives.
                    </p>
                </div>
            </div>
        </section>
    );
};



const VisionInPartnershipSection = () => {
    return (
        <motion.section
            className={styles.visionPartnershipSection}
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className={styles.visionPartnershipContent}>
                <div className={styles.visionPartnershipLeft}>
                    <motion.h2 className={styles.visionPartnershipTitle} variants={baseVariants}>
                        Our Vision in Partnership
                    </motion.h2>
                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.1 }}>
                        In partnership with <span className={styles.navgurukulHighlight}> <span className={styles.navgurukul}>Nav</span>Gurukul</span>, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth.
                    </motion.p>
                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.2 }}>
                        This includes residential facilities, nutritious meals, world-class instruction, and career placement support. Today, the foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in <span className={styles.highlightGreen}>programming, business, education, and second-chance opportunities.</span>
                    </motion.p>
                </div>
                <div className={styles.visionPartnershipRight}>
                    <motion.div className={styles.visionPartnershipImageContainer} variants={baseVariants} transition={{ delay: 0.4 }}>
                        <img src={campusImg25} alt="NavGurukul Students" className={styles.visionPartnershipImage} />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};


const Mission = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Thoda wait taaki page puri tarah load ho jaye
                setTimeout(() => {
                    const offset = 160; // Aapne pehle 190 rakha tha, adjust kar sakti hain
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } else {
            // Agar normal Mission link hai, toh top par jao
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className={styles.pageContainer}>
            <div style={{ textAlign: 'center', padding: '40px 0 0 0' }}>
                <h1 className={styles.modernTitleBlue}>Our Mission & Vision</h1>
            </div>

            <MissionVisionSection />
            <FounderSection />
            {/* Pedagogy hat gaya hai, lekin VisionInPartnership niche rehna chahiye */}
            <VisionInPartnershipSection />
        </div>
    );
};

export default Mission;