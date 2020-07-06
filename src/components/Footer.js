import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/CoderJoe206" className="icon fa-twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/javila35" className="icon fa-github" target="_blank" rel="noreferrer" aria-label="Github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://dev.to/javila35" className="icon fa-book" target="_blank" rel="noreferrer" aria-label="Blog">
            <span className="label">Blog</span>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/javila35/" className="icon fa-code" target="_blank" rel="noreferrer" aria-label="Leetcode">
            <span className="label">Leetcode</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer;