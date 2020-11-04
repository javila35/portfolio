import React from 'react';
import Resume from '../assets/images/07-20resume.pdf';

const Footer = () => (
  <div>
    <h3>Socials:</h3>
    <ul>
      <li>
        <a href="https://twitter.com/joeaviladev/" target="_blank" rel="noreferrer" aria-label="Twitter">
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/javila35/" target="_blank" rel="noreferrer" aria-label="Github">
          <span>Github</span>
        </a>
      </li>
      <li>
        <a href="https://leetcode.com/javila35/" target="_blank" rel="noreferrer" aria-label="Leetcode">
          <span>Leetcode</span>
        </a>
      </li>
      <li>
        <a href={Resume} target="_blank" rel="noreferrer" aria-label="Resume">
          <span>Resume</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Footer;
