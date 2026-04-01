import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import styles from './EventsAndActivities.module.css';

// Images Import (Placeholder use kar raha hu, aap apne imports use karein)
import womansDayImage from '../assets/womans-Day.jpg';
import hackathonsPhoto from '../assets/Programming Hackathon.jpeg';

// --- DATA: Expanded with Highlights for more info ---
const eventsData = [
    {
        title: "Independence Day Celebration",
        date: "August 15, 2024",
        description: "Honoring the nation's spirit with flag hoisting, cultural programs, and patriotic fervor displayed by our students and staff. The day reminded us of our duties towards building a better India.",
        highlights: ["Flag Hoisting Ceremony", "Patriotic Song Performances", "Student Speeches on Freedom"],
        mediaType: 'video',
        mediaSrc: 'https://2c28zt61kz.ucarecd.net/ad074c4e-e4ce-4ade-866f-20234854c7f9/independence_day_2024.mp4'
    },
    {
        title: "Infosys Campus Visit",
        date: "September 10, 2024",
        description: "Our students gained invaluable industry exposure during an insightful visit to the Infosys campus. They interacted with software engineers and HR professionals to understand corporate culture.",
        highlights: ["Corporate Office Tour", "Q&A with Senior Engineers", "Career Guidance Session"],
        mediaType: 'video',
        mediaSrc: 'https://2c28zt61kz.ucarecd.net/4dfe157b-f679-4c0b-a1d2-b23318aa6056/InfosysVisitvideo1.mp4'
    },
    {
        title: "Global Exchange: Meetup with MIT USA",
        date: "January 25, 2024",
        description: "A collaborative session where our students exchanged ideas, culture, and technical knowledge with peers from MIT, USA. This cross-cultural interaction boosted their confidence significantly.",
        highlights: ["Technical Knowledge Exchange", "Cultural Performance", "Collaborative Problem Solving"],
        mediaType: 'video',
        mediaSrc: 'https://2c28zt61kz.ucarecd.net/c70d88bf-45f8-486e-8352-758e9a82c631/VID_20240125_124807798.mp4'
    },
    {
        title: "Women's Day Celebration",
        date: "March 8, 2024",
        description: "Celebrating the strength, resilience, and achievements of women within our community. We organized special workshops focused on women's empowerment and leadership.",
        highlights: ["Empowerment Workshop", "Success Stories Sharing", "Cultural Dance"],
        mediaType: 'image',
        mediaSrc: womansDayImage
    },
    {
        title: "Community Healthcare Camp",
        date: "July 30, 2024",
        description: "Our commitment to wellness in action. A free healthcare camp providing essential check-ups, eye tests, and medical advice to the local underprivileged community.",
        highlights: ["Free Health Checkups", "Eye & Dental Screening", "Medicine Distribution"],
        mediaType: 'video',
        mediaSrc: 'https://2c28zt61kz.ucarecd.net/1015491d-6622-42f8-b319-958cc04d5b4b/HealthCamp30July24.mp4'
    },
    {
        title: "Intensive 24-Hour Hackathons",
        date: "Monthly Event",
        description: "Fueling innovation and teamwork. Students participate in grueling yet exciting hackathons where they build real-world software solutions under tight deadlines.",
        highlights: ["Real-world Problem Solving", "Team Collaboration", "Prototype Development"],
        mediaType: 'image',
        mediaSrc: hackathonsPhoto
    }
];

const EventCard = ({ event, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div 
            className={`${styles.eventRow} ${isReversed ? styles.rowReverse : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Media Side */}
            <div className={styles.mediaContainer}>
                {event.mediaType === 'video' ? (
                    <video className={styles.media} src={event.mediaSrc} autoPlay loop muted playsInline />
                ) : (
                    <img src={event.mediaSrc} alt={event.title} className={styles.media} />
                )}
            </div>

            {/* Content Side */}
            <div className={styles.contentContainer}>
                <div className={styles.dateBadge}>
                    <Calendar size={16} /> {event.date}
                </div>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <p className={styles.eventDesc}>{event.description}</p>
                
                {/* Highlights to add more info/length */}
                <div className={styles.highlightsBox}>
                    <h4 className={styles.highlightsTitle}>Event Highlights:</h4>
                    <ul className={styles.highlightsList}>
                        {event.highlights.map((point, i) => (
                            <li key={i}><CheckCircle size={14} className={styles.checkIcon}/> {point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const EventsAndActivities = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Hero */}
            <section className={styles.heroSection}>
                <motion.h1 
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Events & Activities
                </motion.h1>
                <p className={styles.heroSubtitle}>
                    Celebrating culture, innovation, and community spirit at AJMF.
                </p>
            </section>

            {/* Events List */}
            <div className={styles.eventsContainer}>
                {eventsData.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                ))}
            </div>
        </div>
    );
};

export default EventsAndActivities;