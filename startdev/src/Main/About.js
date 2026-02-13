import React from 'react';
import './About.css';
import Section from './Section.js';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {defaultConfig} from '../Data/defaultConfig';

    function About({config = defaultConfig, className }) {
      const [ref, inView] = useInView();
      const baseSize = config.font_size;

      const themes = [
        { icon: '🌿', title: 'Ecological Memory', desc: 'How landscapes hold the imprint of centuries' },
        { icon: '🏠', title: 'Displacement & Return', desc: 'The ache of leaving and the courage of coming home' },
        { icon: '📜', title: 'Oral Tradition', desc: 'Stories passed through generations, bending but unbroken' },
        { icon: '🌾', title: 'Land & Identity', desc: 'How place shapes who we become' }
      ];

      return (
        <Section id="about" className="pattern-dots py-20 md:py-28" bg="">
          <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-start'}`}>
              <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: config.primary_action_color }}>
                About the Book
              </span>
              <h2 className="font-display font-bold mb-4" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 2.25}px`, color: config.text_color }}>
                A Story Unearthed
              </h2>
              <div className="w-16 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${config.primary_action_color}, #F4A261)` }}/>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div className={`space-y-5 ${inView ? 'animate-slide-left delay-200' : 'opacity-start'}`}>
                <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                  When Lena Vasquez inherits her grandmother's crumbling farmhouse in the Andalusian foothills, she expects dust, silence, and a quick sale. Instead, she discovers a leather journal buried beneath the olive grove — and with it, a legacy that rewrites everything she thought she knew about her family.
                </p>
                <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                  Spanning three generations and two continents, <em>The Earth Remembers</em> weaves between 1936 wartime Spain and present-day New Mexico, tracing a bloodline of women who buried their truths in the soil and trusted the land to keep them safe.
                </p>
                <p className="font-body leading-relaxed" style={{ fontSize: `${baseSize * 1.05}px`, color: config.text_color + 'dd' }}>
                  Part mystery, part love letter to the natural world, this novel asks: <em>What happens when the ground beneath us starts speaking — and we finally choose to listen?</em>
                </p>
              </div>
              <div className={`${inView ? 'animate-slide-right delay-300' : 'opacity-start'}`}>
                <div className="rounded-2xl p-8" style={{ background: config.surface_color, border: `1px solid ${config.primary_action_color}15`, boxShadow: `0 8px 30px ${config.text_color}08` }}>
                  <h3 className="font-display font-semibold mb-6" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 1.25}px`, color: config.text_color }}>
                    Key Themes
                  </h3>
                  <div className="space-y-4">
                    {themes.map((t, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 rounded-xl transition-colors" style={{ background: `${config.primary_action_color}06` }}
                        onMouseEnter={e => e.currentTarget.style.background = `${config.primary_action_color}12`}
                        onMouseLeave={e => e.currentTarget.style.background = `${config.primary_action_color}06`}
                      >
                        <span className="text-2xl mt-0.5">{t.icon}</span>
                        <div>
                          <span className="font-body font-semibold block" style={{ fontSize: `${baseSize * 0.95}px`, color: config.text_color }}>{t.title}</span>
                          <span className="font-body" style={{ fontSize: `${baseSize * 0.85}px`, color: config.text_color + '99' }}>{t.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl p-8 md:p-10 ${inView ? 'animate-fade-up delay-400' : 'opacity-start'}`} style={{ background: config.surface_color, border: `1px solid ${config.primary_action_color}15` }}>
              <h3 className="font-display font-semibold mb-6" style={{ fontFamily: `${config.font_family}, 'Playfair Display', Georgia, serif`, fontSize: `${baseSize * 1.2}px`, color: config.text_color }}>
                Publication Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Release Date', value: 'March 18, 2025' },
                  { label: 'Publisher', value: 'Meridian Press' },
                  { label: 'Pages', value: '384' },
                  { label: 'ISBN', value: '978-0-13-468599-7' }
                ].map((d, i) => (
                  <div key={i}>
                    <span className="font-body text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: config.primary_action_color }}>{d.label}</span>
                    <span className="font-body font-medium" style={{ fontSize: `${baseSize * 0.95}px`, color: config.text_color }}>{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${config.primary_action_color}10` }}>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold font-body" style={{ background: '#9CAF8820', color: '#6B8F5B' }}>
                  Literary Fiction · Historical · Family Saga
                </span>
              </div>
            </div>
          </div>
        </Section>
  );
}

export default About;