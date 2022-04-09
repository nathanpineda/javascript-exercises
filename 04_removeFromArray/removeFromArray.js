const removeFromArray = function(array, ...elements) {
    const list = array;
    const args = elements;
    
    for (let i = 0; i < args.length; i++) {
        if (args[i]) {
            list.splice(list.indexOf(args[i], 1));
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
