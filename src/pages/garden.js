import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'

/* 
To do:

Learn to render pages from MD files in a directory

*/


const garden = () => {
    return (
      <Layout>
        <SEO title="Joe Avila || Digital Garden" />
        <div>
          <section>
            <h2>Welcome to my digital garden.</h2>
          </section>
        </div>
      </Layout>
    )
};

export default garden;