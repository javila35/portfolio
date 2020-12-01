const path = require('path')
const fetch = require(`node-fetch`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    const result = await graphql(`
    {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `${node.frontmatter.path}`,
            component: blogPostTemplate,
            context: {}
        })
    })
}

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
    const result = await fetch(`https://dev.to/api/articles?username=javila35`)
    const resultData = await result.json()
    createNode({
        articles: resultData,
        id: `articles`,
        parent: null,
        children: [],
        internal: {
            type: `Example`,
            contentDigest: createContentDigest(resultData),
        }
    })
}