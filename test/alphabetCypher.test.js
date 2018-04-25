'use strict';

const { assert } = require('chai');

function encryptString(messageToEncrypt, passKey) {
    const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMessage = '';

    for (var i = 0; i < messageToEncrypt.length; i++) {
        const keyIndex = i % passKey.length;
        const keyLetter = passKey[keyIndex];

        const letterToEncrypt = messageToEncrypt[i];

        const keyLetterIndex = alphabetMap.indexOf(keyLetter.toUpperCase());
        const letterToEncryptIndex = alphabetMap.indexOf(letterToEncrypt.toUpperCase());

        const encryptedLetterIndex = ((keyLetterIndex + letterToEncryptIndex) % alphabetMap.length);
        const encryptedLetter = alphabetMap[encryptedLetterIndex];

        encryptedMessage += encryptedLetter;
    }

    return encryptedMessage;
}

describe('alphabetCypher', function () {
    it('will encrypt the letter "T" to "L" when provided with the key "S"', function () {
        const passKey = 'S';
        const letterToEncrypt = 'T';

        const encryptedLetter = encryptString(letterToEncrypt, passKey);
        const expectedEncryptedLetter = 'L';

        assert.equal(encryptedLetter, expectedEncryptedLetter);
    });

    it('will decrypt the letter "U" to "H" when provided with the key "N"', function () {
        const passKey = 'N';
        const letterToDecrypt = 'U';

        const decryptedLetter = encryptString(letterToDecrypt, passKey);
        const expectedDecryptedLetter = 'H';

        assert.equal(decryptedLetter, expectedDecryptedLetter);
    });

    it('encrypt a message using the key "snitch"', function () {
        const passKey = 'snitch';
        const messageToEncrypt = 'thepackagehasbeendelivered';

        const encryptedMessage = encryptString(messageToEncrypt, passKey);

        assert.equal(encryptedMessage, 'lumicjcnoxjhkomxpkwyqogywq'.toUpperCase());
    });
});