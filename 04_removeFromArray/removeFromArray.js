const removeFromArray = function(array, ...args) {
    const list = array;
    const argArray = args;
    
    return list.filter(elements => !argArray.includes(elements));
};

// Do not edit below this line
module.exports = removeFromArray;