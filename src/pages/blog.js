import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO'
import BlogPosts from '../components/blog/BlogPosts';

const Blog = () => {
    return (
        <Layout>
            <SEO
                title="Joe Avila || Blog Posts"
            />
            <div id="main">
                <BlogPosts />
            </div>
        </Layout>
    );
};

export default Blog;