const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest,
}) => {
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
        },
    })
}