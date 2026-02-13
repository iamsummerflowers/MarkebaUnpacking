import React from 'react';
import './BookCoverSVG.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import bookImage from "../assets/heroImage2a.png";

function BookCoverSVG({ className }) {
    return (

      <img 
        src={bookImage}
        alt="Book Cover"
        className={`relative w-fit mx-auto scale-125 ${className}`}
        loading="lazy"
        onerror="console.error('Book cover image failed to load:', this.src); this.style.background='linear-gradient(135deg, #2C1810 0%, #4A2C20 100%'; this.alt='Book cover unavailable';"      
      
      />

        // <svg viewBox="0 0 300 440" className={`mx-auto scale-125 ${className}`} xmlns="http://www.w3.org/2000/svg">
        //   <defs>
        //     <linearGradient id="coverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        //       <stop offset="0%" stopColor="#2C1810"/>
        //       <stop offset="40%" stopColor="#4A2C20"/>
        //       <stop offset="100%" stopColor="#3D2218"/>
        //     </linearGradient>
        //     <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        //       <stop offset="0%" stopColor="#F4A261"/>
        //       <stop offset="50%" stopColor="#E8C07A"/>
        //       <stop offset="100%" stopColor="#F4A261"/>
        //     </linearGradient>
        //     <clipPath id="bookClip">
        //       <rect x="5" y="5" width="290" height="430" rx="4"/>
        //     </clipPath>
        //   </defs>
        //   <rect x="2" y="2" width="296" height="436" rx="6" fill="#1a0f0a"/>
        //   <rect x="5" y="5" width="290" height="430" rx="4" fill="url(#coverGrad)"/>
        //   <g clipPath="url(#bookClip)" opacity="0.08">
        //     {[...Array(20)].map((_, i) => (
        //       <circle key={i} cx={30 + (i % 5) * 65} cy={30 + Math.floor(i / 5) * 110} r={40 + (i % 3) * 15} fill="none" stroke="#F4A261" strokeWidth="0.5"/>
        //     ))}
        //   </g>
        //   <line x1="40" y1="120" x2="260" y2="120" stroke="url(#goldAccent)" strokeWidth="1" opacity="0.6"/>
        //   <line x1="40" y1="320" x2="260" y2="320" stroke="url(#goldAccent)" strokeWidth="1" opacity="0.6"/>
        //   <g transform="translate(150, 220)" opacity="0.15">
        //     <circle cx="0" cy="0" r="80" fill="none" stroke="#F4A261" strokeWidth="0.8"/>
        //     <circle cx="0" cy="0" r="60" fill="none" stroke="#F4A261" strokeWidth="0.5"/>
        //     <circle cx="0" cy="0" r="40" fill="none" stroke="#F4A261" strokeWidth="0.5"/>
        //     <path d="M-30,-10 Q-15,-40 0,-10 Q15,-40 30,-10 Q15,20 0,40 Q-15,20 -30,-10Z" fill="none" stroke="#F4A261" strokeWidth="1"/>
        //   </g>
        //   <text x="150" y="165" textAnchor="middle" fill="url(#goldAccent)" fontFamily="'Playfair Display', Georgia, serif" fontSize="28" fontWeight="700" letterSpacing="1">
        //     <tspan x="150" dy="0">THE EARTH</tspan>
        //     <tspan x="150" dy="36">REMEMBERS</tspan>
        //   </text>
        //   <text x="150" y="260" textAnchor="middle" fill="#C08B80" fontFamily="'Source Sans 3', sans-serif" fontSize="11" letterSpacing="3" fontWeight="300">A NOVEL</text>
        //   <text x="150" y="360" textAnchor="middle" fill="url(#goldAccent)" fontFamily="'Playfair Display', Georgia, serif" fontSize="16" fontStyle="italic" opacity="0.9">Mirabel Thornwood</text>
        //   <rect x="5" y="5" width="12" height="430" rx="2" fill="#1a0f0a" opacity="0.3"/>
        //   <rect x="5" y="5" width="6" height="430" rx="2" fill="#0d0805" opacity="0.2"/>
        // </svg>
      );
    }

    // Author portrait SVG
    function AuthorSVG({ className }) {
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="authorBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E07A5F" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#F4A261" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="98" fill="var(--soft-linen)"/>
          <circle cx="100" cy="100" r="98" fill="url(#authorBg)"/>
          <circle cx="100" cy="78" r="32" fill="#C08B80" opacity="0.7"/>
          <ellipse cx="100" cy="155" rx="45" ry="35" fill="#C08B80" opacity="0.5"/>
          <circle cx="100" cy="78" r="30" fill="#D4A490"/>
          <ellipse cx="100" cy="152" rx="42" ry="32" fill="#D4A490" opacity="0.6"/>
          <circle cx="100" cy="100" r="96" fill="none" stroke="#E07A5F" strokeWidth="2" opacity="0.3"/>
        </svg>
    );
  }
  
  export default BookCoverSVG;