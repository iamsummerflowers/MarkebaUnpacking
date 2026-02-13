import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import {defaultConfig} from '../Data/defaultConfig';


    function Footer({config = defaultConfig }) {
      const baseSize = config.font_size;
      const currentYear = new Date().getFullYear();


      return (
        <footer className="py-12" style={{ background: 'var(--dark-earth)' }} role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="section-divider mb-8 mx-auto w-32"/>
            <p className="font-display font-semibold mb-2" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 1.1}px`, color: '#FFF8F0cc' }}>
              {config.book_title}
            </p>
            <p className="font-body text-xs mb-4" style={{ color: '#FAF0E688' }}>
              by {config.author_name}
            </p>
            <p className="font-body text-xs" style={{ color: '#FAF0E655' }}>
              © {currentYear} {config.author_name}. Published by Beyond Sight Solutions. All rights reserved.
            </p>
          </div>
        </footer>
    );
  }
  
  export default Footer;