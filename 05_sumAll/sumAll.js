const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    first = firstInt;
    second = secondInt;

    if (Math.sign(first) === -1 || Math.sign(second) === -1) {
        sum = "ERROR";
    }   else if (typeof first === 'string' || typeof second === 'string') {
        sum = "ERROR";
    }   else if (first < second) {
            for (let i = firstInt; i <= secondInt; i++) {
                sum += i;
        } 
    }   else if (first > second) {
            for (let i = firstInt; i >= secondInt; i--) {
                sum += i;
        }
        }  else {
            console.log("ERROR");
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
