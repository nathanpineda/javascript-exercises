const leapYears = function(year) {
    let inputYear = year;
    let isLeapYear;
    let divisibleBy100 = 0;

    if(inputYear % 100 === 0) {
        divisibleBy100 += inputYear;
    }

    if (inputYear % 4 !== 0) {
        isLeapYear = false;
    } else if (inputYear % 100 === 0 && inputYear % 400 !== 0) {
        isLeapYear = false;
    } else if (inputYear % 100 === 0 && inputYear % 400 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = true;
    }
};

// Do not edit below this line
module.exports = leapYears;
