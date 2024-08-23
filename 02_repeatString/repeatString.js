const repeatString = function(word,numOfRepetitions) {

    
    let repeatedString = "";

    if (numOfRepetitions<0) {

        return "ERROR";
    }

    else 

        for (let i = 0 ; i < numOfRepetitions ; i++){

        repeatedString = repeatedString.concat(word);

        }

        return repeatedString;


};

// Do not edit below this line
module.exports = repeatString;
