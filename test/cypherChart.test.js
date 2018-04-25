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
    const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    it('will encrypt the letter "T" to "L" when provided with the key "S"', function () {
        const keyLetterIndex = alphabetMap.indexOf('S');
        const letterToEncryptIndex = alphabetMap.indexOf('T');

        const encryptedLetterIndex = ((keyLetterIndex + letterToEncryptIndex) % alphabetMap.length);
        const expectedEncryptedLetter = 'L';

        assert.equal(alphabetMap[encryptedLetterIndex], expectedEncryptedLetter);
    });

    it('will decrypt the letter "U" to "H" when provided with the key "N"', function () {
        const keyLetterIndex = alphabetMap.indexOf('N');
        const letterToDecryptIndex = alphabetMap.indexOf('U');

        const encryptedLetterIndex = ((keyLetterIndex + letterToDecryptIndex) % alphabetMap.length);
        const expectedDecryptedLetter = 'H';

        const encryptedMessage = encryptString('U', 'N');
    });

    it('encrypt a message using the key "snitch"', function () {
        const passKey = 'snitch';
        const messageToEncrypt = 'thepackagehasbeendelivered';

        const encryptedMessage = encryptString(messageToEncrypt, passKey);

        assert.equal(encryptedMessage, 'lumicjcnoxjhkomxpkwyqogywq'.toUpperCase());
    });
});