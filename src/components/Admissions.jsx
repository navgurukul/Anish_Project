import React from 'react';
import { FaUserGraduate, FaRupeeSign, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import { BiBrain } from "react-icons/bi";
import styles from './Admissions.module.css';

const Admissions = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Join the Revolution in Education</h1>
          <p className={styles.heroSubtitle}>
            In collaboration with <strong>NavGurukul</strong>, we offer a fully funded residential programming course for youth from underserved communities.
          </p>
          <a href="https://admissions.navgurukul.org/" target="_blank" rel="noreferrer" className={styles.heroCta}>
            Start Your Application
          </a>
        </div>
      </section>

      {/* --- Eligibility Section --- */}
      <section className={styles.criteriaSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Who Can Apply?</h2>
          <p className={styles.sectionDesc}>Targeting youth (16+) from low-income communities driven to change their future.</p>
          
          <div className={styles.gridContainer}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.iconBox}><FaUserGraduate /></div>
              <h3>Age Limit</h3>
              <p>Applicants should generally be between <strong>16 and 28 years old</strong>.</p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.iconBox}><BiBrain /></div>
              <h3>Education</h3>
              <p>No prior degree needed. Open to dropouts, 10th/12th pass, or graduates. Min 10th pass preferred.</p>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.iconBox}><FaRupeeSign /></div>
              <h3>Financial Background</h3>
              <p>Family income should be less than <strong>₹15,000/year</strong> (Urban) or <strong>₹10,000/year</strong> (Rural).</p>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.iconBox}><FaLaptopCode /></div>
              <h3>Interest</h3>
              <p>A genuine passion for programming and willingness to learn English are key.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section (Timeline Look) --- */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadingWhite}>The Admission Process</h2>
          
          <div className={styles.timeline}>
            
            {/* Stage 1 */}
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.content}>
                <span className={styles.stageTag}>Stage 1</span>
                <h3>Screening Test</h3>
                <p>An initial test assessing basic Maths, Logical Reasoning, and English (up to 8th standard level).</p>
                <ul>
                  <li><FaCheckCircle className={styles.checkIcon}/> Online or Offline</li>
                  <li><FaCheckCircle className={styles.checkIcon}/> Maths (20 marks) & English (10 marks)</li>
                </ul>
              </div>
            </div>

            {/* Stage 2 */}
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.content}>
                <span className={styles.stageTag}>Stage 2</span>
                <h3>Academic Interview</h3>
                <p>A deeper evaluation of your problem-solving skills and communication.</p>
                <ul>
                  <li><FaCheckCircle className={styles.checkIcon}/> <strong>English:</strong> 15-30 min telephonic interview.</li>
                  <li><FaCheckCircle className={styles.checkIcon}/> <strong>Algebra:</strong> 1 hour video call solving equations.</li>
                </ul>
              </div>
            </div>

            {/* Stage 3 */}
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.content}>
                <span className={styles.stageTag}>Stage 3</span>
                <h3>Culture Fit Round</h3>
                <p>We assess your alignment with our values, your needs, and your commitment to the community.</p>
                <ul>
                  <li><FaCheckCircle className={styles.checkIcon}/> Focus on motivation & emotional readiness.</li>
                </ul>
              </div>
            </div>

            {/* Stage 4 */}
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.content}>
                <span className={styles.stageTag}>Stage 4</span>
                <h3>Offer Letter</h3>
                <p>Congratulations! You will receive an offer letter via email confirming your selection.</p>
                <ul>
                  <li><FaCheckCircle className={styles.checkIcon}/> Includes travel planning assistance.</li>
                  <li><FaCheckCircle className={styles.checkIcon}/> Fully funded residential program begins.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className={styles.finalCta}>
        <h2>Ready to start your journey?</h2>
        <a href="https://admissions.navgurukul.org/" target="_blank" rel="noopener noreferrer" className={styles.heroCta}>Apply Now</a>
      </section>

    </div>
  );
};

export default Admissions;