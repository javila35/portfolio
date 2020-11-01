import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Wordcloud from '../components/Wordcloud/Wordcloud';

const Cloud = () => {
    return (
        <Layout>
            <SEO title="Joe Avila || Wordcloud" />
            <div>
                <section>
                    <h2>What I've been working on:</h2>
                    <Wordcloud />
                </section>
            </div>
        </Layout>
    )
};

export default Cloud;