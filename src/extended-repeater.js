const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes, separator = '+', additionRepeatTimes, addition, additionSeparator} = options;
  let result = str
  if (repeatTimes == undefined && additionRepeatTimes == undefined) {
    result +=`${addition}`
  } 
  for (let i = 1; i <= repeatTimes; i++) {
    for (let j = 1; j <= additionRepeatTimes; j++) {
      j == additionRepeatTimes ? result += `${addition}` : result += `${addition}${additionSeparator}`     
    }
    i == repeatTimes ? null : result += `${separator}${str}`
  }
  return result
};
