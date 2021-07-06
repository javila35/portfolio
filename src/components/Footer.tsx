import * as React from "react";
import { Link } from "gatsby";
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
            href="https://docs.google.com/document/d/e/2PACX-1vS5MFQnB1QtP2y7xrzQ6skerE-EEHB_hNmJ22w4vEh7GKOpEKx2vxMTRbgRWU4LX8W4Ei5WGbLlRzar/pub"
            className="nav"
            target="blank"
          >
            Resume
          </a>
          {/* <Link to="/wordcloud" className="nav">
            Wordcloud
          </Link> */}
        </div>
      </div>
    </div>
  );
};
