import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="Portrait of Joe Avila" />
      </a>
      <h1>
        <strong>Joe Avila</strong>
        <br />
        <br />
        Web Developer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
