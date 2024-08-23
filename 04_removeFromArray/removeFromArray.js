const removeFromArray = function(numbers,...unwantedNumbers) {

    let spliced = numbers;

    for (let i = 0 ; i < numbers.length ; i++){

        for(let j = 0 ;j < unwantedNumbers.length ;j++){

        
            if(numbers[i] === unwantedNumbers[j]){

            spliced.splice(i,1);

            i--;

            }

        }
    
       
    }

    return spliced ;

};

// Do not edit below this line
module.exports = removeFromArray;
