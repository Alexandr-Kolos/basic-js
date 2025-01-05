const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionPart = Array(options.additionRepeatTimes || 1)
    .fill(addition)
    .join(additionSeparator);
  const fullStr = `${str}${additionPart}`;
  const result = Array(options.repeatTimes || 1)
    .fill(fullStr)
    .join(separator);
  return result;
}

module.exports = {
  repeater
};
