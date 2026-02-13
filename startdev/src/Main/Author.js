import React from 'react';
import './Author.css';
import { Link } from 'react-router-dom';
import Section from './Section.js';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {defaultConfig} from '../Data/defaultConfig';
import authorImage from "../assets/authorImage1.jpg";


    function Author({config = defaultConfig}) {
      const [ref, inView] = useInView();
      const baseSize = config.font_size;

      const socials = [
        { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
        { name: 'Instagram', icon: '📸' }
        // { name: 'Website', icon: '🌐' }
      ];

      return (
        <Section id="author" className="py-20 md:py-28" bg="" style={{ background: config.background_color }}>
          <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 30% 50%, ${config.primary_action_color}08, transparent 60%)` }}/>
          <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-start'}`}>
              <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: config.primary_action_color }}>
                Meet the Author
              </span>
              <h2 className="font-display font-bold mb-4" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 2.25}px`, color: config.text_color }}>
                {config.author_name}
              </h2>
              <div className="w-16 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${config.primary_action_color}, #F4A261)` }}/>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className={`w-fit xxflex-shrink-0 ${inView ? 'animate-scale-in delay-200' : 'opacity-start'}`}>
                <div className="mx-auto relative">
                  <div className="absolute -inset-3 rounded-full" style={{ background: `linear-gradient(135deg, ${config.primary_action_color}30, #F4A26130)`, filter: 'blur(20px)' }}/>
                  <img 
                    src={authorImage}
                    alt="Image of Author"
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-md mx-auto bottom-20 object-cover"
                    loading="lazy"
                    onerror="console.error('Author image failed to load:', this.src); this.style.background='linear-gradient(135deg, #2C1810 0%, #4A2C20 100%'; this.alt='Author Image unavailable';"      
                  
                  />                </div>
              </div>
              <div className={`flex-1 ${inView ? 'animate-slide-right delay-300' : 'opacity-start'}`}>
                <div className="space-y-5">
                  <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                    <strong style={{ color: config.text_color }}>Sontae Flowers</strong>  is a debut author, entrepreneur, and introspective storyteller whose journey has taken her from the vibrant streets of New Orleans to the rolling hills of Northern California and back to her Louisiana roots in Slidell.
                  </p>
                  <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                    Born in 1972, Sontae holds an MBA and brings a unique blend of business acumen and creative insight to her writing. Her first book, Markeba: Unpacking my Journey, explores the deeply personal significance of her middle name—a name she once set aside but later reclaimed as a symbol of light, growth, and transformation.
                    </p>
                  <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                    A mother of two, Summer and Tyler, Sontae writes with honesty and heart, inviting readers to reflect on their own journeys of self-discovery and the hidden meanings that shape who we become.
                  </p>
                </div>

                {/* <div className="mt-8 p-6 rounded-xl" style={{ background: config.surface_color, border: `1px solid ${config.primary_action_color}15` }}>
                  <h4 className="font-body font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: config.primary_action_color }}>Previous Works</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📕</span>
                      <span className="font-body" style={{ fontSize: `${baseSize * 0.95}px`, color: config.text_color }}><em>Roots of Salt</em> (2019) — Longlisted, National Book Award</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📗</span>
                      <span className="font-body" style={{ fontSize: `${baseSize * 0.95}px`, color: config.text_color }}><em>Field Notes from Nowhere</em> (2021) — Essay Collection</span>
                    </div>
                  </div>
                </div> */}

                {/* <div className="xxbg-red-400 w-fit mt-6 flex gap-5">
                  {socials.map((s, i) => (
                    <a key={i} href="#" onClick={e => e.preventDefault()}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 card-hover"
                      style={{ background: `${config.primary_action_color}12`, color: config.text_color }}
                      onMouseEnter={e => { e.currentTarget.style.background = config.primary_action_color; e.currentTarget.style.color = '#FFF'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${config.primary_action_color}12`; e.currentTarget.style.color = config.text_color; }}
                      aria-label={s.name}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <span className="mx-auto text-center text-sm">{s.icon}</span>
                    </a>
                  ))}
                </div> */}
                  <div className="w-fit mt-6 flex gap-5">
                    {config.socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn w-7 h-7 rounded-full flex items-center justify-center mx-auto"
                        style={{ backgroundColor: social.color }}
                        title={social.name}
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </Section>
    );
  }
  
  export default Author;