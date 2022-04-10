const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    first = firstInt;
    second = secondInt;

    if (first < second) {
            for (let i = firstInt; i <= secondInt; i++) {
                sum += i;
        } 
    }   else if (first > second) {
            for (let i = firstInt; i >= secondInt; i--) {
                sum += i;
        }
     }  else if (typeof first !== 'number' || typeof second !== 'number') {
            sum = "ERROR";
        } else if (first.Math.sign() === -1 || second.Math.sign() === -1) {
            sum = "ERROR";
        } else {
            console.log("ERROR");
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
