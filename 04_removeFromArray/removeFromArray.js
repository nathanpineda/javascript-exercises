const removeFromArray = function(array, element) {
    const list = array;
    let elementIndex = list.indexOf(element);
    
    if (elementIndex > -1) {
        list.splice(elementIndex, 1);
    }

    if (argument[2]) {
        let argumentTwo = list.indexOf(argument[2]);
        list.splice(argumentTwo, 2);
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
