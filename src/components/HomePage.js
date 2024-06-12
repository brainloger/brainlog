import React from 'react';
//import placeholderImage from '../assets/images/placeholder.png';
import showcase_of_brainlog_app_mobile from '../assets/images/showcase_of_brainlog_app_mobile.png'
import googlePlayStore from '../assets/images/google-play-store.png';
import './HomePage.css';
import { APP_NAME } from '../config/config';


function HomePage() {
  /*
  
  <section id="home" className="homepage">
  </section>
  storage and rich search capabilities. Edit, save, and find your documents with ease.
  */
  return (
    <section id="home"  className="homepage_placement">
      <div className="homepage">
        <div className='app_showcase_placement'>
          <div className="app_showcase_container">
          <h1>Simplify Your Life:<br/>Manage Information with Ease</h1>
          <div className="app_showcase_subcontainer">
            <p className="app_showcase_description">Imagine a world where you never lose track of your notes and ideas. Make it a reality by starting your journey with {APP_NAME}!</p>
            <div className="app_store_buttons_container">
              <a href="https://play.google.com/apps/internaltest/4701093461764322843" target="_blank" rel="noreferrer">
                <img src={googlePlayStore} alt="Get it on Google Play"/>
              </a>{/* | 
              <a href="https://www.apple.com/app-store/">Download for iOS</a>*/}
              <p className="app_showcase_warning">Currently available by invite only.</p>
            </div>
          </div>
          </div>
        </div>
        <div className='img_placement'>
          <h1>Simplify Your Life:<br/>Manage Information with Ease</h1>
          <img src={showcase_of_brainlog_app_mobile} alt="App Screenshot" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
