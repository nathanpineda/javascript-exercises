const removeFromArray = function(array, ...args) {
    const list = array;
    const args = args;
    
    for (let i = 0; i < args.length; i++) {
        if (args[i]) {
            list.splice(list.indexOf(args[i], 1));
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
