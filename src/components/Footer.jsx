import React from 'react';
import instaIcon from '../assets/social.png';
import likedinIcon from '../assets/linkedin.png';
import '../sass/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Vigneshwaran Sivakumar</h3>
      <ul className="footer-links">
        <li>Home</li>
        <li>Skills</li>
        <li>Tools</li>
        <li>Projects</li>
      </ul>
      <div className="footer-social">
        <img src={instaIcon} alt="Instagram" className='instagram-icon'/>
        <img src={likedinIcon} alt="LinkedIn" className="linkedin-icon"/>
      </div>
      <div className="footer-rights">
        Vignesh S 2024 © All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
