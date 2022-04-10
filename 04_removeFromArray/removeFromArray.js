const removeFromArray = function(array, ...args) {
    const list = array;
    const argArray = args;
    const newList = [];
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== argArray[0]) {
            newList.push(list[i]);
        }
    }

    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;