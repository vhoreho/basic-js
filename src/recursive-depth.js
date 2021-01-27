const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    arr.map(item => {
      let depth = 1;
      if (Array.isArray(item)) depth += this.calculateDepth(item)
      max = Math.max(max, depth);
    });
    return max;
  }
};

function calculateDepth(arr) {
    let max = 1;
    arr.map(item => {
      let depth = 1;
      if (Array.isArray(item)) depth += calculateDepth(item)
      max = Math.max(max, depth);
    });
    return max;
  }


console.log(calculateDepth([1, 2, 3, [4, 5, [4, 6]]]));