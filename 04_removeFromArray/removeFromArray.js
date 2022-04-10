const removeFromArray = function(array, ...args) {
    const list = array;
    const argArray = args;
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] === argArray[0]) {
            list.slice(i);
        } 
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;