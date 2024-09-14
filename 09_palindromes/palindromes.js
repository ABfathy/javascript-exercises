const palindromes = function (arr) {

    let characters = arr.split("");

    let filtered = characters.filter(item => !(item === "!" || item === " " || item === "." || item === ",")).map(item => item.toLowerCase());


    for (let i = 0 ; i < filtered.length / 2; i++){

        if (filtered[i] !== filtered[filtered.length - 1 - i]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
