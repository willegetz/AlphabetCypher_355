'use strict';

const { assert } = require('chai');

describe('alphabetCypher', function () {
    it('will encrypt the letter "T" to "L" when provided with the key "S"', function () {
        // Make a substitution chart where each row of the alphabet is rotated by one for each row down the chart.
        // From column 0 to column 25, the chart is A-Z
        // From row 0 to row 25, the chart is A-z
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const keyLetterIndex = alphabetMap.indexOf('S');
        const letterToEncryptIndex = alphabetMap.indexOf('T');

        //let correspondingNote = chromaticScale[((scale + semitone) % chromaticScale.length)];
        const encryptedLetterIndex = ((keyLetterIndex + letterToEncryptIndex) % alphabetMap.length);
        const expectedEncryptedLetter = 'L'

        assert.equal(alphabetMap[encryptedLetterIndex], expectedEncryptedLetter);
    });

    it('will decrypt the letter "U" to "H" when provided with the key "N"', function () {
        // Make a substitution chart where each row of the alphabet is rotated by one for each row down the chart.
        // From column 0 to column 25, the chart is A-Z
        // From row 0 to row 25, the chart is A-z
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const keyLetterIndex = alphabetMap.indexOf('N');
        const letterToDecryptIndex = alphabetMap.indexOf('U');

        //let correspondingNote = chromaticScale[((scale + semitone) % chromaticScale.length)];
        const encryptedLetterIndex = ((keyLetterIndex + letterToDecryptIndex) % alphabetMap.length);
        const expectedDecryptedLetter = 'H'

        assert.equal(alphabetMap[encryptedLetterIndex], expectedDecryptedLetter);
    });
});