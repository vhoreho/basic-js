const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.alphabet = {
      'A': 0,
      'B': 1,
      'C': 2,
      'D': 3,
      'E': 4,
      'F': 5,
      'G': 6,
      'H': 7,
      'I': 8,
      'J': 9,
      'K': 10,
      'L': 11,
      'M': 12,
      'N': 13,
      'O': 14,
      'P': 15,
      'Q': 16,
      'R': 17,
      'S': 18,
      'T': 19,
      'U': 20,
      'V': 21,
      'W': 22,
      'X': 23,
      'Y': 24,
      'Z': 25,
    };
    this.reverseAlphabet = {
      0 : 'A',
      1 : 'B',
      2 : 'C',
      3 : 'D',
      4 : 'E',
      5 : 'F',
      6 : 'G',
      7 : 'H',
      8 : 'I',
      9 : 'J',
      10 : 'K',
      11 : 'L',
      12 : 'M',
      13 : 'N',
      14 : 'O',
      15 : 'P',
      16 : 'Q',
      17 : 'R',
      18 : 'S',
      19 : 'T',
      20 : 'U',
      21 : 'V',
      22 : 'W',
      23 : 'X',
      24 : 'Y',
      25 : 'Z',
    };
    this.isDirect = isDirect;
  }

  encrypt(sourceText, key) {
    let encryptArray = [];
    sourceText = sourceText.split('');
    key = key.split('');
    while (sourceText.length > key.length) {
      key = key.concat(key);
    }
    let compensator = 0;
    sourceText.forEach((symbol, index) => {
      if (Object.keys(this.alphabet).indexOf(symbol.toUpperCase()) !== -1) {
        encryptArray.push(this.reverseAlphabet[(this.alphabet[symbol.toUpperCase()] + this.alphabet[key[index - compensator].toUpperCase()]) % 26]);
      } else {
        encryptArray.push(symbol);
        compensator += 1;
      }
    });
    return (this.isDirect) ? (encryptArray.join('')) : (encryptArray.reverse().join(''));
  }

  decrypt(encodedText, key) {
    let decryptArray = [];
    encodedText = encodedText.split('');
    key = key.split('');
    while (encodedText.length > key.length) {
      key = key.concat(key);
    }
    let compensator = 0;
    encodedText.forEach((symbol, index) => {
      if (Object.keys(this.alphabet).indexOf(symbol.toUpperCase()) !== -1) {
        if ((this.alphabet[symbol] - this.alphabet[key[index - compensator].toUpperCase()]) < 0) {
          decryptArray.push(this.reverseAlphabet[(this.alphabet[symbol] - this.alphabet[key[index - compensator].toUpperCase()]) + 26]);
        } else {
          decryptArray.push(this.reverseAlphabet[(this.alphabet[symbol] - this.alphabet[key[index - compensator].toUpperCase()])]);
        }
      } else {
        decryptArray.push(symbol);
        compensator += 1;
      }
    });
    return (this.isDirect) ? (decryptArray.join('')) : (decryptArray.reverse().join(''));
  }
}

module.exports = VigenereCipheringMachine;