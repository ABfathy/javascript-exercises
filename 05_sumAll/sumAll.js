const sumAll = function(firstInt,secondInt) {

    sum = 0;

    if(typeof firstInt !== "number" || typeof secondInt !== "number"){

        return "ERROR";
    }

    if(firstInt % 1 !== 0 || secondInt % 1 !==0){

        return "ERROR";
    }
    
    if( firstInt < 0 || secondInt < 0){

        return "ERROR";
    }

     if(firstInt < secondInt){

        for (let i = firstInt; i <= secondInt ; i++)

            {
                    sum+=i;
            }

        } else if (secondInt < firstInt){

            for (let i = secondInt ; i <= firstInt ; i++)

                {
                    sum+=i;
                }

            }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
