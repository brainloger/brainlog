import React from 'react';
import placeholderImage from '../assets/images/placeholder.png';
import './HowItWorks.css';
import { APP_NAME } from '../config/config';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <p>Using {APP_NAME} is simple and intuitive:</p>
      <ol>
        <li>Create a new document or open an existing one.</li>
        <li>Edit your document using our advanced text editor.</li>
        <li>Save your document to the cloud for easy access anywhere.</li>
        <li>Use our powerful search functionality to find your documents quickly.</li>
      </ol>
      <img src={placeholderImage} alt="How It Works" />
    </section>
  );
}

export default HowItWorks;
