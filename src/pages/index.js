import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Joe Avila'
  const siteDescription = 'Web Developer portfolio for Joe Avila.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hello, I'm Joe!
            </h2>
          </header>
          <p>
            I'm a web developer based in Seattle, WA. <strong>I'm currently seeking my first opportunity</strong> to begin my career in tech.
            My strengths include <strong>communication, adaptability, and  critical thinking</strong>. 
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">joeavilacodes@gmail.com</a>
                </li>
              </ul>
            </div>
        </section>
      </div>
    </Layout>
  )
};

export default HomeIndex;
