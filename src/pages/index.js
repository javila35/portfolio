import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Projects from '../components/Projects/Projects'
import Resume from '../assets/images/07-20resume.pdf';
import Portfolio from '../assets/images/thumbs/portfolio-thumb.webp';

const HomeIndex = () => {
  const siteTitle = 'Joe Avila || Web Dev'
  const siteDescription = 'Portfolio website for Joseph Avila. Titles include: Full Stack Developer, Web Developer, Front End Developer, Back end Developer.'

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" property="og:description" content={siteDescription} />
        <meta name="author" property="og:author" content="Joseph Avila" />
        <meta property="og:url" content="https://www.joeavila.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Joe Avila's Portfolio" />
        <meta name="image" property="og:image" content={Portfolio} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Thumbnail of Joseph Avila's portfolio website." />
        
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
            <br/>
            <br/>
            I work well in a team environment where I get to practice my listening skills and engage in thoughtful conversation.
            In leadership roles my priority is to understand the strengths and goals of individual members to better place them in positions to challenge their growth.
            My diverse work history has given me the ability to quickly adapt to changing needs. Whether it's a customer changing their mind on an order,
            or an operation system being updated on the fly I am quick to change habits.
          </p>
          <ul className="actions">
            <li>
              <a href="/cloud" className="button special">
                See what I've been working on
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h1>Projects</h1>
          <Projects />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:joeavilacodes@gmail.com">joeavilacodes@gmail.com</a>
                </li>
                <li>
                  <h3 className="icon fa-file">
                    <span className="label">Resume</span>
                  </h3>
                  <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
              </ul>
            </div>
        </section>
      </div>
    </Layout>
  )
};

export default HomeIndex;
