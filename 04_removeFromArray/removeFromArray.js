const removeFromArray = function(array, numOne = 0, numTwo) {
    const list = array;
    let removeElement = 1;

    if (numTwo) {
    list.splice(numTwo - 1, removeElement);
    } else if (numOne > 0) {
    list.splice(numOne - 1, removeElement);
    } else {
        console.log('Error');
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
