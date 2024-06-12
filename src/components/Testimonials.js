import React from 'react';
import './Testimonials.css';
import { APP_NAME } from '../config/config';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <blockquote>
        <p>"{APP_NAME} has transformed the way I manage my documents. The cloud storage and search capabilities are unmatched!"</p>
        <footer>- Happy User</footer>
      </blockquote>
      <blockquote>
        <p>"A must-have app for anyone who works with text documents. The editor is fantastic and the cloud integration is seamless."</p>
        <footer>- Satisfied Customer</footer>
      </blockquote>
    </section>
  );
}

export default Testimonials;
