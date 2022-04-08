const removeFromArray = function(array, num = 0, removeElement = 1) {
    const list = array;
    list.splice(list[num], removeElement);
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
