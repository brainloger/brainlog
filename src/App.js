import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
//import Features from './components/Features';
//import HowItWorks from './components/HowItWorks';
//import AboutUs from './components/AboutUs';
//import Testimonials from './components/Testimonials';
//import Blog from './components/Blog';
//import Download from './components/Download';
//import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

import './App.css';

function App() {
  //3 вниз
  /*
  <Features />
  <HowItWorks />
  <AboutUs />
  <Testimonials />
  <Blog />
  <Download />
  <PrivacyPolicy />
  <Footer />
  
  <div className="logo">MyApp</div>
  */ 
 /*
 <div className="div2"></div>
 */

 /*
 */
 return (
   <div className="maindiv">
      <Header /> 
      <div className="pagePlace">
          <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
