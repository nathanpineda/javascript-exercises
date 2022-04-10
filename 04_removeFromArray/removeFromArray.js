const removeFromArray = function(array, ...args) {
    const list = array;
    const argArray = args;
    
    for (let i = 0; i < argArray.length; i++) {
        if (argArray[i]) {
            list.slice(list.indexOf(argArray[i]));
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;