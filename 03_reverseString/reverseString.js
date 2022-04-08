const reverseString = function(string) {
    let input = '';
    for (let i = string.length; i >= 0; i--) {
        input += string.charAt(i);
    }

    return input;
};

// Do not edit below this line
module.exports = reverseString;
