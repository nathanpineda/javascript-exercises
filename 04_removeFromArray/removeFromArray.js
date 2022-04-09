const removeFromArray = function(array, ...elements) {
    const list = array;
    const arguments = elements;
    
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            list.splice(list.indexOf(argument[i], 1));
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
