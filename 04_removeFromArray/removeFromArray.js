const removeFromArray = function(array, num = 0, removeElement = 1) {
    const list = array;
    list.splice(num - 1, removeElement);
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
