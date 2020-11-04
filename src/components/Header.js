import React from 'react'
import { Link } from 'gatsby'
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
      <h3>Navigation:</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cloud">Word Cloud</Link></li>
        <li><Link to="/garden">Digital Garden</Link></li>
        <li><Link to="/books">Bookshelf</Link></li>
      </ul>
    </div>
    <Footer />
  </header>
)

export default Header