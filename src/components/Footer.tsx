import * as React from "react";
import { Link } from "gatsby";
import { HitCounter } from "./HitCounter";
import "./styles/Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-nav-wrapper">
          <Link to="/projects" className="nav">
            Projects
          </Link>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSr83mBKLN0pB7FlaVcYxdlUSu7XKPhWDwNO0VghMkpV0R_tzwMQS5QvFFWWhbKRYBhXsbl_DUb36nc/pub"
            className="nav"
            target="blank"
          >
            Resume
          </a>
          {/* <Link to="/wordcloud" className="nav">
            Wordcloud
          </Link> */}
        </div>
        <HitCounter />
      </div>
    </div>
  );
};
