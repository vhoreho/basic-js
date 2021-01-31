  
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length
  },
  addLink(value) {
    value = String(value) ? `( ${String(value)} )` : '( )'
    this.result.push(value)

    return this
  },
  removeLink(position) {
    if (!position || typeof position !== 'number' || position < 0 ) {
      this.result = []
      throw new Error()
    }

    this.result.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.result.reverse()
    return this
  },
  finishChain() {
    const final = this.result.join('~~')
    this.result = []

    return final
  }
};

module.exports = chainMaker;