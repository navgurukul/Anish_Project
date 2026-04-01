import React from 'react';
import { motion } from 'framer-motion';
import styles from './PastInitiatives.module.css';


const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const PastInitiatives = () => {
    return (
        <div className={styles.pageContainer}>
            
            {/* Header Section */}
            <motion.section 
                className={styles.heroSection}
                initial="hidden"
                animate="visible"
                variants={baseVariants}
            >
                <h1 className={styles.pageTitle}>Our Journey & Context</h1>
                <p className={styles.pageSubtitle}>Addressing the roots of the problem since 2019</p>
            </motion.section>

            {/* SECTION 1: 2019 Past Initiative (Anudip Partnership) */}
            <section className={styles.initiativeSection}>
                <div className={styles.contentWrapper}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={baseVariants}
                    >
                        <h2 className={styles.sectionHeading}>Past Initiative (2019)</h2>
                        <h3 className={styles.subHeadingBlue}>Partnership with Anudip Foundation</h3>
                    </motion.div>

                    <div className={styles.splitLayout}>
                        {/* Left Side: Text */}
                        <motion.div 
                            className={styles.textContent}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={baseVariants}
                        >
                            <p className={styles.mainText}>
                                In 2019, AJMF partnered with the <strong>Anudip Foundation</strong> to address the employability crisis directly. 
                                Our goal was to bridge the gap between education and employment for those who needed it most.
                            </p>
                            
                            <div className={styles.statBox}>
                                <span className={styles.bigNumber}>200+</span>
                                <span className={styles.statLabel}>Underprivileged Youths Trained</span>
                            </div>

                            <p className={styles.mainText}>
                                This initiative resulted in successful placements in the <strong>ITeS (Information Technology Enabled Services)</strong> and <strong>BFSI (Banking, Financial Services and Insurance)</strong> sectors in Pune.
                            </p>
                        </motion.div>

                        {/* Right Side: Image Placeholders (Since you don't have images) */}
                        <motion.div 
                            className={styles.imageGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            {/* Placeholder 1 */}
                            {/* <div className={styles.imagePlaceholder}>
                                <span>Classroom Training Photo</span>
                            </div> */}
                            {/* Placeholder 2 */}
                            {/* <div className={styles.imagePlaceholder}>
                                <span>Certificate Distribution</span>
                            </div> */}
                            {/* Placeholder 3 */}
                            {/* <div className={styles.imagePlaceholderFull}>
                                <span>Group Photo with Students</span>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </section>

    

        </div>
    );
};

export default PastInitiatives;