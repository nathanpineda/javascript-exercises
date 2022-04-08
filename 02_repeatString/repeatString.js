const repeatString = function(string, num) {
    let stringWord = '';
    let numCheck = Math.sign(num);

    if (numCheck === -1) {
        return stringWord += 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            stringWord += string;
            }
        return stringWord;
    }
};

// Do not edit below this line
module.exports = repeatString;
