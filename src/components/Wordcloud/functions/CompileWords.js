// The data returned from GSheetReader isn't in the format I need it to be for React WordCloud.
// These functions reformat the data in the way that I need.

// creates array of words returned from spreadsheet. 
const createWordArray = data => {
    let strArray = [];
    data.forEach(thing => {
        strArray.push(thing["topics"])
        if (thing["topics ii"]) {
            strArray.push(thing["topics ii"])
        };
    });
    strArray = strArray.join(", ");
    strArray = strArray.split(", ");
    return strArray;
};

// Sorting through WordArray to create an object with single occurence of each topic, and a count.
const createWordObject = array => {
    const wordCountObj = {};
    array.forEach(word => {
        if (!wordCountObj[word]) {
            wordCountObj[word] = 1;
        } else {
            wordCountObj[word] += 1;
        };
    });
    return wordCountObj;
};

// Structure WordObject for WordCloud output.
const createCloudObject = object => {
    const wordArray = [];
    const newObj = Object.entries(object);
    newObj.map(entryArray =>{
        return wordArray.push({text: entryArray[0], value: entryArray[1] * 100})
    })
    return wordArray;
};

// Compiles smaller methods and returns final WordCloud object.
const compileObject = results => {
    results = createWordArray(results);
    results = createWordObject(results);
    results = createCloudObject(results);
    return results;
};

export default compileObject;