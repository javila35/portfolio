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
            href="https://docs.google.com/document/d/e/2PACX-1vSFuStOiUJ2lLyMV2D1_1Il4UGF6uUe0Efy55Rsx7KzZH3hDMD_CkO01iNf2V4IMA/pub"
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
