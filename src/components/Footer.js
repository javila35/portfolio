import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/CoderJoe206" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github" target="_blank">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope-o">
            <span className="label">Email</span>
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

export default Footer
