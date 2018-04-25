'use strict';

const { assert } = require('chai');

describe('alphabetCypher', function () {
    it('will encrypt the letter "T" to "L" when provided with the key "S"', function () {
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const keyLetterIndex = alphabetMap.indexOf('S');
        const letterToEncryptIndex = alphabetMap.indexOf('T');

        const encryptedLetterIndex = ((keyLetterIndex + letterToEncryptIndex) % alphabetMap.length);
        const expectedEncryptedLetter = 'L';

        assert.equal(alphabetMap[encryptedLetterIndex], expectedEncryptedLetter);
    });

    it('will decrypt the letter "U" to "H" when provided with the key "N"', function () {
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const keyLetterIndex = alphabetMap.indexOf('N');
        const letterToDecryptIndex = alphabetMap.indexOf('U');

        const encryptedLetterIndex = ((keyLetterIndex + letterToDecryptIndex) % alphabetMap.length);
        const expectedDecryptedLetter = 'H';

        assert.equal(alphabetMap[encryptedLetterIndex], expectedDecryptedLetter);
    });

    it('encrypt a message using the key "snitch"', function(){
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const passKey = 'snitch';
        const messageToEncrypt = 'thepackagehasbeendelivered';

        let encryptedMessage = '';

        for(var i = 0; i < messageToEncrypt.length; i++){
            const keyIndex = i % passKey.length;
            const keyLetter = passKey[keyIndex];

            const letterToEncrypt = messageToEncrypt[i];

            const keyLetterIndex = alphabetMap.indexOf(keyLetter.toUpperCase());
            const letterToEncryptIndex = alphabetMap.indexOf(letterToEncrypt.toUpperCase());

            const encryptedLetterIndex = ((keyLetterIndex + letterToEncryptIndex) % alphabetMap.length);
            const encryptedLetter = alphabetMap[encryptedLetterIndex];
          
            encryptedMessage += encryptedLetter;

        }

        assert.equal(encryptedMessage, 'lumicjcnoxjhkomxpkwyqogywq'.toUpperCase());
    });
});