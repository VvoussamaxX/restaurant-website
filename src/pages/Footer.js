import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    googleTranslateElementInit();
  }, []);

  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }

  function toggleLanguageDropdown() {
    setShowDropdown((prevState) => !prevState);
  }

  return (
    <footer id="footer">
      <div className="container">
        <h3>SavourEats</h3>
        <p>Mon-Sat: 11:00 AM - 23:00 PM / +1 869 613 2212</p>
        <div className="social-links">
          <a href="#https://example.com/twitter" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#https://example.com/twitter" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#https://example.com/twitter" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#https://example.com/twitter" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#https://example.com/twitter" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className={`footer-translate ${showDropdown ? 'show' : ''}`} id="translate">
          <div id="google_translate_element"></div>
        </div>
        <a href="#footer" className="language-icon" onClick={toggleLanguageDropdown}>
          <i className="fas fa-globe"></i>
          <i className={`fas ${showDropdown ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


