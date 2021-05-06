import * as React from "react";
import { Layout } from "../components";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="bio right">
        <section>
          <h3>Hey, my name's Joe Avila.</h3>
          <h4>
            I'm a web developer based in Seattle, WA. While{" "}
            <em>React and Typescript/JS</em> are my bread and butter, I'm quick
            to ask questions and learn new skills. You can see my previous work
            experience on my{" "}
            <a href="assets/resume.pdf" target="_blank">
              resume
            </a>
            .
          </h4>
          <h5>I'm looking for work!</h5>
          <p>
            My ideal role would be on a team of developers maintaining and
            adding new features to an app in production. The front end is where
            I'll be able to contribute initially. But I'm eager to continue
            honing my experience working on API's, especially those built in{" "}
            <em>Node</em> and/or <em>GraphQL</em>.
          </p>
          <h5>What I bring to the table:</h5>
          <p>
            I'm a team player with great communication! My active listening
            skill relates to my ability to pick up new technical skills quickly.
            The decade I spent in the service industry trained me not to
            personalize feedback. I have a positive attitude that I carry with
            me into daily meetings, and paired programming sessions.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
