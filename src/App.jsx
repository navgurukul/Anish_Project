import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { trackPageView } from './utils/analytics';
import ScrollToTop from './components/ScrollToTop';

import AboutAnish from './components/AboutAnish';
import OurPrograms from './components/OurProgram';
import Home from './components/Home';
import CampusAndFacilities from './components/CampusAndFacilities';
import GetInvolved from './components/GetInvolved';
import ContactUs from './components/ContactUs';
import StudentLedCampus from './components/StudentLedCampus';
import SuccessStories from './components/SuccessStories';
import Admissions from './components/Admissions';
import Donate from './components/Donate';
import PastInitiatives from './components/PastInitiatives';
import Mission from './components/Mission';
import DayAtCampus from './components/DayAtCampus';
import Gallery from './components/Gallery';
import EventsAndActivities from './components/EventsAndActivities';
import Pedagogy from './components/Pedagogy';

function App() {
  const location = useLocation();
 
  useEffect(() => {
    const getPageName = (pathname) => {
      const routes = {
        '/': 'Home',
        '/campus': 'Campus & Facilities',
        '/involved': 'Get Involved',
        '/about': 'About Anish',
        '/programs': 'Our Programs',
        '/contact': 'Contact Us',
        '/success-stories': 'Success Stories',
        '/student-campus': 'Student Led Campus',
        '/mission': 'Mission & Trustee',
        '/past-initiatives': 'Past Initiatives',
        '/day-at-campus': 'A Day at Campus',
        '/gallery': 'Gallery',
        '/events': 'Events & Activities',
        '/admissions': 'Admissions',
        '/donate': 'Donate'
      };
      return routes[pathname] || 'Unknown Page';
    };

    trackPageView(getPageName(location.pathname));
  }, [location]);

  return (
 
    <div className="App flex flex-col min-h-screen bg-gray-900">
      <CustomCursor />
      <Navbar />
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
           

         
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/" element={<Home />} />
          <Route path="/campus" element={<CampusAndFacilities />} />
          <Route path="/involved" element={<GetInvolved />} />
          <Route path="/mission" element={<Mission />} />
          
          <Route path="/about" element={<AboutAnish />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/past-initiatives" element={<PastInitiatives />} />
          <Route path="/day-at-campus" element={<DayAtCampus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<EventsAndActivities />} />

      
          <Route path="/student-campus" element={<StudentLedCampus />} />

     
          <Route path="/success-stories" element={<SuccessStories />} />

        
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/donate" element={<Donate />} />
          <Route path="/pedagogy-and-higher-education" element={<Pedagogy />} />
    
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

 
