import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const Books = () => {
    return (
        <Layout>
            <SEO title="Joe Avila || Bookshelf" />
            <div>
                <section>
                <h2>My Bookshelf</h2>
                <ul>
                    <li>Render</li>
                    <li>Books</li>
                    <li>Here</li>
                </ul>
                </section>
            </div>
        </Layout>
    )
}

export default Books;