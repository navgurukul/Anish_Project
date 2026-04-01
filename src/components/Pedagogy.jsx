import React from 'react';
import { motion } from 'framer-motion';
import styles from './Pedagogy.module.css'; // Nayi CSS file use karein

const Pedagogy = () => {
    const listVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1, 
            x: 0, 
            transition: { delay: i * 0.2, duration: 0.5 }
        })
    };

    const points = [
        "We emphasize Self-Learning, guided by a structured system of peer mentorship and industry mentors.",
        "Facilitators act as learning coaches to support and enhance the process, rather than traditional full-time teachers.",
        "The curriculum focuses on developing the essential ability of 'Learning How to Learn' in a world driven by AI.",
        "Our student-driven campus provides real-world leadership and collaboration opportunities through the Student Council System.",
        "The program develops essential life skills (communication, negotiation, problem-solving, and teamwork)."
    ];

    return (
        <div className={styles.pedagogyPage}>
            <div className={styles.container}>
                {/* Header Section */}
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.mainTitle}>Residential Courses Pedagogy</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>Beyond Traditional Education: Our Innovative Learning Approach</p>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                    className={styles.contentCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.cardHeader}>
                        <h2>RESIDENTIAL COURSES - PEDAGOGY</h2>
                    </div>
                    
                    <div className={styles.cardBody}>
                        <p className={styles.introText}>
                            At our campus, we follow a unique and effective learning approach designed for the modern world:
                        </p>
                        
                        <ul className={styles.pointsList}>
                            {points.map((point, i) => (
                                <motion.li 
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={listVariants}
                                >
                                    <span className={styles.bulletIcon}>✦</span>
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Higher Education Gap Section */}
                <section className={styles.gapSection}>
                    <motion.div 
                        className={styles.contentWrapper}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    >
                        <h2 className={styles.sectionHeading}>The Higher Education Gap</h2>
                        <p className={styles.sectionDescription}>
                            India's higher education system struggles to equip students with the skills needed for real-world employment. 
                            Limited affordability, outdated curricula, language barriers, and a disconnect from industry demands leave millions of students unprepared.
                        </p>

                        {/* Challenges Grid */}
                        <div className={styles.challengesGrid}>
                            <motion.div className={styles.challengeCard} variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}>
                                <div className={styles.iconCircle}>₹</div>
                                <h3>Unaffordability</h3>
                                <p>Public colleges are guarded by tough entrance exams, and private ones are often financially out of reach for the underprivileged.</p>
                            </motion.div>

                            <motion.div className={styles.challengeCard} variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}>
                                <div className={styles.iconCircle}>⚙️</div>
                                <h3>Outdated Curricula</h3>
                                <p>Lack of proper pedagogy and an improper learning environment lead to a disconnect with modern industry needs.</p>
                            </motion.div>

                            <motion.div className={styles.challengeCard} variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}>
                                <div className={styles.iconCircle}>💬</div>
                                <h3>Language Barrier</h3>
                                <p>Most content is in English, making it difficult for students from marginalized backgrounds to compete.</p>
                            </motion.div>

                            <motion.div className={styles.challengeCard} variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}>
                                <div className={styles.iconCircle}>💼</div>
                                <h3>Unemployability</h3>
                                <p>Even after completing college, ~97% of engineers lack the technical and cognitive skills required for software-related jobs.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Pedagogy;