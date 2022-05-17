import { Link } from "gatsby";
import * as React from "react";
import { Article, Layout } from "../components";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Article title="Hey, my name's Joe Avila!" titleComponent="h3">
        <p style={{ fontSize: "1.44rem" }}>
          I'm a web developer based in Seattle, WA. While{" "}
          <em>React and Typescript/JS</em> are my bread and butter, I'm quick to
          ask questions and learn new skills. You can see my previous work
          experience on my {/* comment to make space */}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vS5MFQnB1QtP2y7xrzQ6skerE-EEHB_hNmJ22w4vEh7GKOpEKx2vxMTRbgRWU4LX8W4Ei5WGbLlRzar/pub"
            target="_blank"
          >
            resume
          </a>{" "}
          or check out my <Link to="/projects">projects</Link>.
        </p>
      </Article>
      <Article title="I'm open to opportunity" titleComponent="h5">
        <p>
          I'm currently employed with{" "}
          <a href="https://www.availcarsharing.com/" target="_blank">
            Avail Car Sharing
          </a>{" "}
          and very happy with my job. I'm always open to hearing about new
          opportunities.
          {/* My ideal role would be on a team of developers maintaining and adding
          new features to an app in production. The front end is where I'll be
          able to contribute initially. But I'm eager to continue honing my
          experience working on API's, especially those built in <em>Node</em>{" "}
          and/or <em>GraphQL</em>. */}
        </p>
      </Article>
      {/* <Article title="What I bring to the table:" titleComponent="h5">
        <p>
          I'm a team player with great communication! My active listening skill
          relates to my ability to pick up new technical skills quickly. The
          decade I spent in the service industry trained me not to personalize
          feedback. I have a positive attitude that I carry with me into daily
          meetings, and paired programming sessions.
        </p>
      </Article> */}
    </Layout>
  );
};

export default IndexPage;
