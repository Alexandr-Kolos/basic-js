const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Invalid input');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (/[A-Z]/.test(messageChar)) {
        const messageCharCode = messageChar.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const encryptedChar = String.fromCharCode(((messageCharCode - 65 + keyCharCode - 65) % 26) + 65);
        encryptedMessage += encryptedChar;
        keyIndex++;
      } else {
        encryptedMessage += messageChar; // Non-alphabetic characters are not changed
      }
    }
    
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Invalid input');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (/[A-Z]/.test(messageChar)) {
        const messageCharCode = messageChar.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const decryptedChar = String.fromCharCode(((messageCharCode - 65 - (keyCharCode - 65) + 26) % 26) + 65);
        decryptedMessage += decryptedChar;
        keyIndex++;
      } else {
        decryptedMessage += messageChar; // Non-alphabetic characters are not changed
      }
    }
    
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
