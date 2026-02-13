import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";


function Section({ id, children, className = "", bg = "" }) {
    return (
        <section id={id} className={`relative ${bg} ${className}`}>
          {children}
        </section>
    );
  }
  
  export default Section;