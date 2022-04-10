const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    first = firstInt;
    second = secondInt;

    if (first < second) {
        for (let i = firstInt; i <= secondInt; i++) {
            sum += i;
        } 
    }   else {
        for (let i = firstInt; i >= secondInt; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
