import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Target, Users, BookOpen } from 'lucide-react'; // Icons for beneficiaries
import styles from './Home.module.css';

// Images
import campusImg4 from '../assets/Study Time.jpg';
import FoundationImage from '../assets/AJMF_0324.jpg';
import BrigadierJadhav from '../assets/campus.png'; // Using the image you used in QuoteSection

const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
};


const HeroSection = () => {
    return (
        <Motion.section
            className={styles.modernHeroSection}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className={styles.heroContent}>
                <Motion.h1 className={styles.modernTitle} variants={baseVariants}>Anish Jadhav</Motion.h1>
                <Motion.h1 className={styles.modernTitleBlue} variants={baseVariants}>Memorial</Motion.h1>
                <Motion.h1 className={styles.modernTitle} variants={baseVariants}>Foundation</Motion.h1>

                <Motion.p className={styles.modernSubtitle} variants={baseVariants}>
                    TORCH BEARER FOR THE NEEDY
                </Motion.p>

            </div>
            <div className={styles.modernHeroImageContainer}>
                <img src={campusImg4} alt="Team" className={styles.modernHeroImage} />
            </div>
        </Motion.section>
    );
};

// --- 2. NEW: STORY BEHIND THE FOUNDATION (Shifted from AboutAnish) ---
const FoundationStorySection = () => {
    return (
        <section id="story-behind-foundation" className={styles.storySection}>
            <div className={styles.storyContainer}>
                {/* Left: Text Content */}
                <Motion.div
                    className={styles.storyContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <Motion.h2 className={styles.sectionTitle} variants={baseVariants}>
                        The Story Behind the Foundation
                    </Motion.h2>
                    <Motion.div className={styles.storyDivider} variants={baseVariants}></Motion.div>

                    <Motion.p className={styles.storyText} variants={baseVariants}>
                        The <strong>Anish Jadhav Memorial Foundation (AJMF)</strong> is a non-profit NGO established
                        in memory of <strong>Anish Jadhav</strong>, the only child of Brigadier Kishor and Mrs. Neeta Jadhav.
                        Anish worked with Nikon India’s Core Technical Team before his untimely passing.
                    </Motion.p>
                    <Motion.p className={styles.storyText} variants={baseVariants}>
                        AJMF, registered under the Bombay Public Trust Act of 1950 on 10 August 2018, is dedicated to providing skills training to the underprivileged across India.
                    </Motion.p>

                    <Motion.ul className={styles.storyList} variants={baseVariants}>
                        <li>India faces a significant skills gap between industry requirements and workforce capabilities.</li>
                        <li>This gap is mainly caused by inadequate training facilities and outdated curricula.</li>
                        <li>To address this issue, AJMF focuses on identifying local skill demands and designing programs that meet specific industry needs.</li>
                    </Motion.ul>
                </Motion.div>

                {/* Right: Image Decoration */}
                <Motion.div
                    className={styles.storyImageWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.imageBackdrop}></div>
                    <img src={BrigadierJadhav} alt="Founder" className={styles.storyImage} />
                </Motion.div>
            </div>
        </section>
    );
};

// --- 3. NEW: CURRENT PROJECT & IMPACT (Special Presentation) ---
const CurrentProjectSection = () => {
    return (
        <section id="current-project" className={styles.impactSection}>
            <div className={styles.impactOverlay}></div> {/* Dark overlay for text pop */}

            <div className={styles.impactContainer}>
                {/* Main Collaboration Statement */}
                <Motion.div
                    className={styles.impactHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={baseVariants}
                >
                    <span className={styles.tagline}>CURRENT PROJECT</span>
                    <h2 className={styles.impactStatement}>
                        Collaborating with <span className={styles.highlightGold}>NavGurukul Foundation</span> to provide
                        <span className={styles.highlightWhite}> FREE residential education</span> in Software Engineering & Digital Marketing.
                    </h2>
                    <p className={styles.impactSubText}>
                        Empowering underprivileged girls at the Anish Jadhav Memorial Foundation Skilling Institute.
                    </p>
                </Motion.div>

                {/* Target Beneficiaries - Cards Design */}
                <div className={styles.beneficiariesWrapper}>
                    <h3 className={styles.beneTitle}>Target Beneficiaries</h3>

                    <div className={styles.beneGrid}>
                        {/* Card 1 */}
                        <Motion.div
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><Users size={32} /></div>
                            <h4>Underprivileged Youth</h4>
                            <p>Talented youth from low-income backgrounds who cannot afford expensive college education.</p>
                        </Motion.div>

                        {/* Card 2 */}
                        <Motion.div
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><Target size={32} /></div>
                            <h4>Girls from Humble Backgrounds</h4>
                            <p>Daughters of daily wage laborers, maids, auto-drivers, and brick kiln workers seeking a better future.</p>
                        </Motion.div>

                        {/* Card 3 */}
                        <Motion.div
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><BookOpen size={32} /></div>
                            <h4>Struggling Graduates</h4>
                            <p>Graduates unable to find suitable employment due to a lack of industry-specific technical skills.</p>
                        </Motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- MAIN HOME COMPONENT ---
const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <HeroSection />
            <FoundationStorySection />
            <CurrentProjectSection />
        </div>
    );
};

export default Home;