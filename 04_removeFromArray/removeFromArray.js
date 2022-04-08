const removeFromArray = function(array, num = 0) {
    const list = array;
    let removeElement = 1;
    list.splice(num - 1, removeElement);
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
