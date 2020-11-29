import React from 'react';
import MusicCard from '../components/404/MusicCard';
import Layout from '../components/layout';
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Joe Avila || Lost & Found"
    />

    <div id="main">
      <h1>You found a 404 page</h1>
      <p>Here's the last song I listened too:</p>
      <MusicCard />
    </div>
  </Layout>
);

export default NotFoundPage;