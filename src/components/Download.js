import React from 'react';
import placeholderImage from '../assets/images/placeholder.png';
import './Download.css';
import { APP_NAME } from '../config/config';

function Download() {
  return (
    <section id="download" className="download">
      <h2>Download</h2>
      <p>Get {APP_NAME} for your device:</p>
      <p>
        <a href="https://play.google.com">Download for Android</a> | 
        <a href="https://www.apple.com/app-store/">Download for iOS</a>
      </p>
      <img src={placeholderImage} alt="Download QR Code" />
    </section>
  );
}

export default Download;
