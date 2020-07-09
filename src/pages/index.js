import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Projects from '../components/Projects/Projects'
import Resume from '../assets/images/07-20resume.pdf';

const HomeIndex = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Joe Avila || Web Dev</title>
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
            In leadership roles my priority is to understand the strengths and 
            goals of individual members to create an environment where everyone is challenged and allowed to succeed.
            My diverse work history has given me the ability to quickly adapt to changing needs whether it's a customer changing their mind on an order,
            or an operation system being updated on the fly.
            I have a passion for connecting the dots between teams and individuals, and can use my critical thinking to identify high priority
            issues that require a sense of urgency. 
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
