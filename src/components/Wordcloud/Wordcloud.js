import React, { useState, useEffect, useMemo } from 'react';
import ReactWordcloud from 'react-wordcloud';
import CompileWords from './functions/CompileWords'
import GoogleSheet from './keys/GoogleSheet';
const GSheetReader = require('g-sheets-api');

// After I implement my blog. OnWordClick should link to a search of my blog with that word.
// https://react-wordcloud.netlify.app/usage/callbacks

const options = {
    rotations: 2,
    rotationAngles: [0, 90],
    fontSizes: [20, 60],
    padding: 0,
    enableTooltip: false
};

const WordCloud = () => {
    const [words, setWords] = useState(false);

    // Use GSheetReader as an "API call" to spreadsheet on load.
    useEffect(() =>{
        GSheetReader(GoogleSheet, results => {
            results = CompileWords(results);
            setWords(results);
        });
    }, []);

    
    // not sure if this memo works.
    // does Gatsby router rerender when visiting a new page?
    const memoizedWordCloud = useMemo(() => <ReactWordcloud words={words} options={options} />, [words]);

    return (
        <>
            {words ? memoizedWordCloud : <h1>Loading</h1> }
        </>
    );
};

export default WordCloud;