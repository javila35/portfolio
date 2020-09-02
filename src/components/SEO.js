import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import image from '../assets/images/ogImage.png';


const SEO = ({ title }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    author,
    description,
    siteUrl,
    twitterUsername
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description,
    url: `${seo.siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      <meta name="image" content={`${seo.siteUrl}${image}`} />
      <meta property="og:image:type" content="image/png" /> 
      <meta property="og:image" content={`${seo.siteUrl}${image}`} />
      <meta property="og:image:width" content="1200" /> 
      <meta property="og:image:height" content="630" />
      {seo.url && <meta property="og:url" content={seo.siteUrl} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
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