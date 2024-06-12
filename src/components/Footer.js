import React from 'react';
import './Footer.css';
import { APP_NAME } from '../config/config';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 {APP_NAME}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
