import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/Projects/Projects';
import SEO from '../components/SEO';

const HomeIndex = () => {
  return (
    <Layout>
      <SEO 
        title="Joe Avila || Web Developer"
      />

      <div id="main">
        <section id="one">
          <header className="major">
            <h1>
              Hello, I'm Joe!
            </h1>
          </header>
          <p>
            I'm a web developer based in Seattle, WA. I'm currently working with <a href="https://www.collineargroup.com/">Collinear Group</a> as a full stack software engineer.
            <br/>
            <br/>
            I work well in a team environment where I get to practice my listening skills and engage in thoughtful conversation.
            In leadership roles my priority is to understand the strengths and goals of individual members to create an environment where everyone is challenged and positioned to succeed.
            My diverse work history has given me the ability to quickly adapt to change whether it's a customer changing their mind or an operation system being updated on the fly.
            I have a passion for connecting the dots between teams and individuals, and can use my critical thinking to identify high priority issues that require a sense of urgency. 
          </p>
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
              </ul>
            </div>
        </section>
      </div>
    </Layout>
  )
};

export default HomeIndex;
