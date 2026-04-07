import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // FaYoutube जोड़ा गया

import styles from './Footer.module.css';
import ajmfLogo from '../assets/AJMF.jpeg'; // मान लीजिए यह आपका लोगो है

function Footer() {
    const facebookUrl = "https://www.facebook.com/anishjmf/";
    const instagramUrl = "https://www.instagram.com/explore/locations/112795623857018/anish-jadhav-memorial-foundation/";
    const linkedinUrl = "https://www.linkedin.com/posts/brigadier-dr-kishor-jadhav-ph-d-97a3934b_anish-jadhav-memorial-foundation-skilling-activity-7180232279640719360-Uw2g/";
    const youtubeUrl = "https://www.youtube.com/watch?v=eHyWsRh03Tk";

    return (
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <div className={styles.container}>

                    {/* Main Footer Content - 4 Columns in CSS Grid */}
                    <div className={styles.footerGrid}>

                        {/* Column 1: Logo and Socials */}
                        <div className={styles.logoSocialsColumn}>
                            <div className={styles.logoSection}>
                                <img src={ajmfLogo} alt="AJMF Logo" className={styles.mainFooterLogo} />
                                {/*<p className={styles.schoolName}>The Anish Jadhav<br/>Memorial Foundation</p> */}
                            </div>

                            {/* Social Icons */}
                            <div className={styles.socialsContainer}>
                                <a
                                    href={facebookUrl}
                                    target="_blank" // नया टैब खोलने के लिए जोड़ा गया
                                    rel="noopener noreferrer" // सुरक्षा के लिए जोड़ा गया
                                    className={styles.socialLink}
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="YouTube"
                                >
                                    <FaYoutube />
                                </a> {/* FaYoutube का उपयोग किया */}
                            </div>
                        </div>

                        {/* Column 2: ABOUT Links */}
                        <div className={styles.linksBlock}> {/* .linksColumnsGroup हटा दिया गया */}
                            <h4 className={styles.linksHeading}>ABOUT</h4>
                            <ul className={styles.linksList}>
                                <li><NavLink to="/about" className={styles.link}>About Anish</NavLink></li>
                                <li><NavLink to="/campus" className={styles.link}>Campus & Facilities</NavLink></li>
                                <li><NavLink to="/contact" className={styles.link}>Contact Us</NavLink></li>
                            </ul>
                        </div>

                        {/* Column 3: GET INVOLVED Links */}
                        <div className={styles.linksBlock}>
                            <h4 className={styles.linksHeading}>GET INVOLVED</h4>
                            <ul className={styles.linksList}>
                                <li><NavLink to="/donate" className={styles.link}>Donate</NavLink></li>
                                <li><NavLink to="/contact" className={styles.link}>FAQs</NavLink></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div className={styles.contactColumn}>
                            <h4 className={styles.linksHeading}>CONTACT</h4>
                            <div className={styles.contactInfo}>
                                <p>Anish Jadhav Memorial Foundation Gharkul Society, Pathare Wasti, Lohegaon, Pune, Maharashtra, India</p>
                                <p>Pin Code: 411047</p>
                                <p className={styles.contactPhone}>+91 9906155699 / 9067330833</p>
                                <p className={styles.contactEmail}>info@ajmf.org</p>
                            </div>
                        </div>
                    </div>





                </div>
            </footer>

            {/* Bottom Bar: Copyright and Powered By (Matching screenshot content) */}

            <div className={styles.footerBottomContent}>
                <p className={styles.copyright}>
                    © Copyright 2026  Anish Jadhav Memorial Foundation. All rights reserved. {/* Updated to match screenshot text */}
                </p>


            </div>
        </div>
    );
}

export default Footer;