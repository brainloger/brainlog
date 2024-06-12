import { APP_NAME } from '../config/config';
import logoImage from '../assets/images/logo.png';
//import { FaBars } from 'react-icons/fa';
//import { AiOutlineClose } from "react-icons/ai";

import React, {/* useState */} from 'react';
import './Header.css';

const Header = () => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);


     /* <div className="logo">MyApp</div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">{APP_NAME}</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} >
      &#9776; 
      </div>*/

       /*
       */ 

  /*function SubMenuUl(){
    return (
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    );
  }*/
       
  return (
    <header className="header" >
      <div className={'allMenu'}>
        <div className={'horizontalMenu'}>
          <a href="#home">
            <div className="logo">
              <div className="logoImg"><img src={logoImage} alt="BrainLog"/></div>
              <div className="logoTxt">{APP_NAME}</div>
            </div>
          </a>
          {/*

          <nav className={'subMenu'}>
            <SubMenuUl/>
          </nav>
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} >
            {isMenuOpen ? <AiOutlineClose/>:<FaBars/>}
          </div>
          */}
        </div>
        {/*<nav className={`appearingMenu ${isMenuOpen ? 'open' : ''}`}>
            <SubMenuUl/>
        </nav>*/}
      </div>
    </header>
  );
};

export default Header;
