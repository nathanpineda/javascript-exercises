const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    first = firstInt;
    second = secondInt;

    for (let i = firstInt; i <= secondInt; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
