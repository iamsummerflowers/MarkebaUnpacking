import React from 'react';
import './Hero.css';
// import Card from './Card.js';
// import logo from '../assets/logoBrain.svg'
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import {defaultConfig} from '../Data/defaultConfig';
import Section from './Section.js';
import BookCoverSVG from './BookCoverSVG.js';
import heroImage1 from "../assets/heroImage1.jpeg";
import heroImage2 from "../assets/heroImage2.jpg";



function Hero({config = defaultConfig}) {
      const [ref, inView] = useInView(0.1);
      const baseSize = config.font_size;

      return (
        <Section id="hero" className="hero-gradient pattern-lines" bg=""
      
        >
          <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28"
          
                        style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${heroImage1})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              // transform: `translateY(${scrollY * 0.5}px)`
            }}
          
          >
            <div className="xxbg-red-400 flex flex-col md:flex-row items-center gap-12 xxmd:gap-26 xxlg:gap-2">
              <div className={`xxbg-yellow-400 px-20 xxflex-1 text-center mx-auto md:text-left mx-auto xxmb-40 ${inView ? 'animate-slide-left' : 'opacity-start'}`}>
                <span
                  className="inline-block px-4 py-1.5 rounded-full w-fit text-xs font-semibold tracking-widest uppercase mb-6 font-body"
                  style={{ background: config.primary_action_color + '25', color: '#fbb022' }}
                >
                  New Release — Available Now
                </span>
                <h1
                  className="xxbg-red-400 w-fit text-center px-0 mx-0 font-display font-bold leading-tight mb-6"
                  style={{
                    fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`,
                    fontSize: `${baseSize * 2}px`,
                    color: '#f0f0f0'
                  }}
                >
                  {config.book_title}
                </h1>
                <p
                  className="font-display italic mb-2"
                  style={{
                    fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`,
                    fontSize: `${baseSize * 1.25}px`,
                    color: '#f0f0f0'
                  }}
                >
                  {config.book_subtitle}
                </p>
                <p
                  className="font-body mb-6"
                  style={{ fontSize: `${baseSize * 1.125}px`, color: '#f0f0f0' }}
                >
                  {config.tagline}
                </p>
                <p
                  className="font-body mb-8"
                  style={{ fontSize: `${baseSize * 0.9}px`, color: '#FAF0E6aa', letterSpacing: '2px' }}
                >
                  by <span className="font-semibold" style={{ color: '#fbb022' }}>{config.author_name}</span>
                </p>
                <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    className="px-8 py-3.5 rounded-full font-semibold text-white border-none cursor-pointer font-body animate-pulse-glow"
                    style={{ background: `linear-gradient(135deg, ${config.primary_action_color}, ${config.primary_action_color}dd)`, fontSize: `${baseSize}px` }}
                    onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {config.hero_cta_text}
                  </button>
                  <button
                    className="px-8 py-3.5 rounded-full font-semibold cursor-pointer font-body bg-transparent"
                    style={{
                      border: `2px solid ${config.secondary_action_color}80`,
                      color: '#f0f0f0',
                      fontSize: `${baseSize}px`
                    }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    onMouseEnter={e => { e.target.style.background = config.secondary_action_color + '20'; }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className={` ${inView ? 'animate-scale-in delay-300' : 'opacity-start'}`}>
                <div className="xxbg-blue-400 w-2/3 mx-auto animate-float">
                  <BookCoverSVG className="mt-15 w-56 sm:w-64 md:w-72 lg:w-80 book-shadow rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24" style={{ background: `linear-gradient(to top, ${config.background_color}, transparent)` }}/>
        </Section>
  );
}

export default Hero;