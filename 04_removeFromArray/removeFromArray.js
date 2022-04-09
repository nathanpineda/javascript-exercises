const removeFromArray = function(array, element) {
    const list = array;
    let elementIndex = list.indexOf(element);
    
    if (elementIndex > -1) {
    list.splice(elementIndex, 1);
    } 
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
