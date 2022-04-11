const ftoc = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * 5/9;

  if(conversion % 1 !== 0) {
    return Math.round(conversion * 1e1) / 1e1;
  }

  return conversion;

};

const ctof = function(celsius) {
  let conversion = (celsius * 9/5) + 32;
  
  if(conversion % 1 !== 0) {
    return Math.round(conversion * 1e1) / 1e1;
  }

  return conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
