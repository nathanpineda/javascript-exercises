const removeFromArray = function(array, numOne = 0, numTwo = 0) {
    const list = array;
    
    let removeElement = 1;

    list.splice(numOne - 1, removeElement);
    
    list.splice(numTwo - 1, removeElement);

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
