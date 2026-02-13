import React from 'react';
import './Purchase.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import Section from './Section.js';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {defaultConfig} from '../Data/defaultConfig';

    function Purchase({config = defaultConfig }) {
      const [ref, inView] = useInView();
      const baseSize = config.font_size;

      const formats = [
        { format: 'Hardcover', price: '$28.00', status: 'Available', icon: '📖' },
        { format: 'Paperback', price: '$17.99', status: 'Pre-order', icon: '📕' },
        { format: 'E-Book', price: '$12.99', status: 'Available', icon: '📱' },
        { format: 'Audiobook', price: '$24.99', status: 'Available', icon: '🎧' }
      ];

      const retailers = [
        { name: 'Amazon', emoji: '📦' },
        { name: 'Barnes & Noble', emoji: '📚' },
        { name: 'Bookshop.org', emoji: '🏪' },
        { name: 'IndieBound', emoji: '🌱' },
        { name: 'Apple Books', emoji: '🍎' },
        { name: 'Audible', emoji: '🔊' }
      ];

      return (
        <Section id="buy" className="py-20 md:py-28" bg="">
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent, ${config.primary_action_color}05, transparent)` }}/>
          <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-start'}`}>
              <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: config.primary_action_color }}>
                Get Your Copy
              </span>
              <h2 className="font-display font-bold mb-4" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 2.25}px`, color: config.text_color }}>
                Choose Your Format
              </h2>
              <div className="w-16 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${config.primary_action_color}, #F4A261)` }}/>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {formats.map((f, i) => (
                <div
                  key={i}
                  className={`w-fitrounded-2xl p-6 text-center card-hover ${inView ? `animate-scale-in delay-${(i+1)*100}` : 'opacity-start'}`}
                  style={{ background: config.surface_color, border: `1px solid ${config.primary_action_color}12` }}
                >
                  <span className="text-4xl block mb-4">{f.icon}</span>
                  <h3 className="font-display font-semibold mb-1" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 1.1}px`, color: config.text_color }}>
                    {f.format}
                  </h3>
                  <p className="font-display font-bold mb-2" style={{ fontSize: `${baseSize * 1.5}px`, color: config.primary_action_color }}>
                    {f.price}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body mb-4" style={{
                    background: f.status === 'In Stock' || f.status === 'Available' ? '#9CAF8820' : '#F4A26120',
                    color: f.status === 'In Stock' || f.status === 'Available' ? '#6B8F5B' : '#D48A2C'
                  }}>
                    {f.status}
                  </span>
                  <button
                    className="w-full py-2.5 rounded-full text-sm font-semibold text-white border-none cursor-pointer font-body transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${config.primary_action_color}, ${config.primary_action_color}dd)` }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 20px ${config.primary_action_color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    onClick={e => e.preventDefault()}
                  >
                    {f.status === 'Pre-order' ? 'Pre-order' : 'Buy Now'}
                  </button>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-8 md:p-10 text-center ${inView ? 'animate-fade-up delay-500' : 'opacity-start'}`} style={{ background: config.surface_color, border: `1px solid ${config.primary_action_color}10` }}>
              <h3 className="font-display font-semibold mb-6" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 1.2}px`, color: config.text_color }}>
                Also Available At
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {retailers.map((r, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="w-fit flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-300 no-underline"
                    style={{ background: `${config.primary_action_color}08`, color: config.text_color, border: `1px solid ${config.primary_action_color}15` }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${config.primary_action_color}18`; e.currentTarget.style.borderColor = `${config.primary_action_color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${config.primary_action_color}08`; e.currentTarget.style.borderColor = `${config.primary_action_color}15`; }}
                  >
                    <span className="w-fit">{r.emoji}</span> {r.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
    );
  }
  
  export default Purchase;