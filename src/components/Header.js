import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header>
    <div>
      <a href="/">
        <img src={avatar} alt="Portrait of Joe Avila" />
      </a>
      <h1>
        <strong>Joe Avila</strong>
      </h1>
      <h2>Web Developer</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cloud">Word Cloud</a></li>
      </ul>
    </div>
    <Footer />
  </header>
)

export default Header
