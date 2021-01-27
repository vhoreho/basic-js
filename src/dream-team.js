const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let array = Array.isArray(members) ? members.filter(item => {return typeof item == 'string'}) : false
  return array.length != 0 &&  array ? array.map(item => item.trim()[0].toUpperCase()).sort().join('') : false
};
