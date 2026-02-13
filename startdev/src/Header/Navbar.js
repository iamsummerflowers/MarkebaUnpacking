import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {defaultConfig} from '../Data/defaultConfig';
import { useState, useEffect, useRef } from 'react';

    function Navbar({config = defaultConfig}) {
      const [scrolled, setScrolled] = useState(false);
      const [mobileOpen, setMobileOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('hero');

      const links = [
        { id: 'about', label: 'About the Book' },
        { id: 'author', label: 'Meet the Author' },
        // { id: 'reviews', label: 'Reviews' },
        // { id: 'events', label: 'Events' },
        // { id: 'media', label: 'Media' },
        // { id: 'buy', label: 'Buy Now' }
      ];

      useEffect(() => {
        const root = document.getElementById('root');
        const handleScroll = () => {
          setScrolled(root.scrollTop > 50);
          const sections = ['hero','about','author','reviews','events','media','buy','contact'];
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 120) { setActiveSection(sections[i]); break; }
            }
          }
        };
        root.addEventListener('scroll', handleScroll);
        return () => root.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      };

      return (
        <nav
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass bg-white"
          style={{
            // background: scrolled ? `${config.background_color}f0` : `${config.background_color}33`,
            borderBottom: scrolled ? `1px solid ${config.primary_action_color}20` : '1px solid transparent',
            boxShadow: scrolled ? '0 4px 30px rgba(44,24,16,0.08)' : 'none'
          }}
          role="navigation" aria-label="Main navigation"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex items-center justify-between h-16 md:h-18">
              <button
                onClick={() => scrollTo('hero')}
                className="w-2/3 font-display text-md md:text-lg font-bold tracking-wide transition-colors duration-300 cursor-pointer bg-transparent border-none"
                style={{ color: scrolled ? config.text_color : '#000000' }}
                aria-label="Scroll to top"
              >
                {config.book_title}
              </button>

              <div className="hidden lg:flex items-center gap-1">
                {links.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg bg-transparent border-none cursor-pointer font-body"
                    style={{
                      color: activeSection === link.id
                        ? config.primary_action_color
                        : (scrolled ? config.text_color + 'cc' : '#000000cc')
                    }}
                    aria-current={activeSection === link.id ? 'true' : undefined}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full" style={{ background: config.primary_action_color }}/>
                    )}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo('buy')}
                  className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white btn-primary border-none cursor-pointer font-body"
                  style={{ background: `linear-gradient(135deg, ${config.primary_action_color}, ${config.primary_action_color}dd)` }}
                >
                  {config.hero_cta_text}
                </button>
              </div>

              <button
                className="w-fit lg:hidden p-2 rounded-lg transition-colors bg-transparent border-none cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? config.text_color : '#0a0a09'} strokeWidth="2" strokeLinecap="round">
                  {mobileOpen ? (
                    <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>
                  ) : (
                    <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className="lg:hidden overflow-hidden transition-all duration-300"
            style={{
              maxHeight: mobileOpen ? '400px' : '0',
              opacity: mobileOpen ? 1 : 0,
              background: config.background_color + 'f5'
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {links.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-transparent border-none cursor-pointer font-body"
                  style={{
                    color: activeSection === link.id ? config.primary_action_color : config.text_color + 'cc',
                    background: activeSection === link.id ? config.primary_action_color + '10' : 'transparent'
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('buy')}
                className="w-fit mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white border-none cursor-pointer font-body"
                style={{ background: config.primary_action_color }}
              >
                {config.hero_cta_text}
              </button>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;