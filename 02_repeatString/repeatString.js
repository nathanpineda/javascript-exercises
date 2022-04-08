const repeatString = function(string, num) {
    let stringReturned = string;
    for (let i = 0; i < num; i++) {
        return stringReturned += string;
    }
};

// Do not edit below this line
module.exports = repeatString;
