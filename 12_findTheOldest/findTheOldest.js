const findTheOldest = function(people) {

    function compareAge(a,b){

        if (a.yearOfDeath == undefined){
            a.yearOfDeath = 2024;
        }

        if (b.yearOfDeath == undefined){
            b.yearOfDeath = 2024;
        }
        
        let ageA = a.yearOfBirth - a.yearOfDeath;
        let ageB = b.yearOfBirth - b.yearOfDeath;

        if(ageA > ageB) return 1;
        if(ageA == ageB) return 0;
        if(ageA < ageB) return -1;
        
    }

    people.sort(compareAge)

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
