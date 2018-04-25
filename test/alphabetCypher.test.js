'use strict';

const { assert } = require('chai');
const alphabetCypher = require('../app/alphabetCypher')();

describe('alphabetCypher', function () {
    it('will encrypt the letter "T" to "L" when provided with the key "S"', function () {
        const passKey = 'S';
        const letterToEncrypt = 'T';

        const encryptedLetter = alphabetCypher.encryptString(letterToEncrypt, passKey);
        const expectedEncryptedLetter = 'L';

        assert.equal(encryptedLetter, expectedEncryptedLetter);
    });

    it('will decrypt the letter "U" to "H" when provided with the key "N"', function () {
        const passKey = 'N';
        const letterToDecrypt = 'U';

        const decryptedLetter = alphabetCypher.encryptString(letterToDecrypt, passKey);
        const expectedDecryptedLetter = 'H';

        assert.equal(decryptedLetter, expectedDecryptedLetter);
    });

    it('encrypt a message using the key "snitch"', function () {
        const passKey = 'snitch';
        const messageToEncrypt = 'thepackagehasbeendelivered';

        const encryptedMessage = alphabetCypher.encryptString(messageToEncrypt, passKey);

        assert.equal(encryptedMessage, 'lumicjcnoxjhkomxpkwyqogywq'.toUpperCase());
    });
});