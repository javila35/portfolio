import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import BlogPosts from '../components/blog/BlogPosts';

const Blog = () => {
    return (
        <Layout>
            <Helmet>
            <html lang="en" />
                <title>Joe Avila || Blog Posts</title>
            </Helmet>
            <div id="main">
                <BlogPosts />
            </div>
        </Layout>
    )
};

export default Blog;