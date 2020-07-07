import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Wordcloud from '../components/Wordcloud/Wordcloud';

const Cloud = () => {
    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>Joe Avila || Wordcloud</title>
            </Helmet>
            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>What I've been working on:</h2>
                    </header>
                    <Wordcloud />
                </section>
            </div>
        </Layout>
    )
};

export default Cloud;