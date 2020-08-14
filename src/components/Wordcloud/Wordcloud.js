import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import CompileWords from './functions/CompileWords'
import GoogleSheet from './keys/GoogleSheet';
const GSheetReader = require('g-sheets-api');

// After I implement my blog. OnWordClick should link to a search of my blog with that word.
// https://react-wordcloud.netlify.app/usage/callbacks

const WordCloud = () => {
    const [words, setWords] = useState([{}]);
    const initialLoad = false;
    const [load, setLoad] = useState(initialLoad);

    // Use GSheetReader as an "API call" to spreadsheet on load.
    useEffect(() =>{
        GSheetReader(GoogleSheet, results => {
            results = CompileWords(results);
            setWords(results);
            setLoad(true);
        });
    }, []);

    return (
        <>
            {load ? null : <h1>Loading</h1> }
            {words === [] ? null : 
            <ReactWordcloud words={words} options={{
                rotations: 2,
                rotationAngles: [0, 90],
                fontSizes: [20, 60],
                padding: 0,
                enableTooltip: false
            }}/>}
        </>
    );
};

export default WordCloud;