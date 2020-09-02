import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Wordcloud from '../components/Wordcloud/Wordcloud';

const Cloud = () => {
    return (
        <Layout>
            <SEO 
                title="Joe Avila || Wordcloud"
            />
            
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