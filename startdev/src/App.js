import React from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar.js';
import Hero from './Main/Hero.js';
import Footer from './Footer/Footer.js';

import {defaultConfig} from './Data/defaultConfig';

function App({config = defaultConfig} ) {


  return (
        <div className="w-full h-full overflow-auto scrollbar-hide" id="app-wrapper" style={{ background: config.background_color }}>
          <Navbar />
          <main>
            <Hero />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            {/* <About />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Author />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Reviews />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Events />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Media />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Purchase />
            <div className="section-divider mx-auto w-4/5 max-w-2xl"/>
            <Contact /> */}
          </main>
          <Footer />
        </div>
  );
}

export default App;
