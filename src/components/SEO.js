import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import ogImage from '../assets/images/ogImage.png';


const SEO = ({ title }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    author,
    description,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title}>
      {/* General Tags */}
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      <meta name="image" content={`${siteUrl}${ogImage}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" /> 
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  twitterUsername: PropTypes.string
};

SEO.defaultProps = {
  title: null,
  description: null,
  url: PropTypes.string
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        author
        description
        siteUrl: url
        twitterUsername
      }
    }
  }
`;