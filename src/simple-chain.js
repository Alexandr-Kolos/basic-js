const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.array.length ||
      !Number.isInteger(position)
    ) {
      this.array = []; // Сбрасываем цепочку при ошибке
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
