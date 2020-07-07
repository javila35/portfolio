import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import CompileWords from './functions/CompileWords'
import GoogleSheet from './keys/GoogleSheet';

const GSheetReader = require('g-sheets-api');

const WordCloud = () => {
    const [words, setWords] = useState([{}]);

    // Use GSheetReader as an "API call" to spreadsheet on load.
    useEffect(() =>{
        GSheetReader(GoogleSheet, results => {
            results = CompileWords(results);
            setWords(results);
        });
    }, []);

    return (
        <>
            {words === [] ? null : 
            <ReactWordcloud words={words} options={{
                rotations: 2,
                rotationAngles: [0, 90],
                fontSizes: [40, 80],
                padding: 0
            }}/>}
        </>
    );
};

export default WordCloud;