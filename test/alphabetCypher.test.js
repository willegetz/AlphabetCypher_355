'use strict';

const { assert } = require('chai');
const alphabetCypher = require('../app/alphabetCypher')();

describe('alphabetCypher', function () {
    it('will encrypt the letter "t" to "l" when provided with the key "s"', function () {
        const passKey = 's';
        const letterToEncrypt = 't';

        const encryptedLetter = alphabetCypher.performEncryption(letterToEncrypt, passKey);
        const expectedEncryptedLetter = 'l';

        assert.equal(encryptedLetter, expectedEncryptedLetter);
    });

    it('will decrypt the letter "u" to "h" when provided with the key "n"', function () {

        const passKey = 'n';
        const letterToDecrypt = 'u';

        const decryptedLetter = alphabetCypher.performDecryption(letterToDecrypt, passKey);
        const expectedDecryptedLetter = 'h';

        assert.equal(decryptedLetter, expectedDecryptedLetter);
    });

    it('will encrypt a message using the key "snitch"', function () {
        const passKey = 'snitch';
        const messageToEncrypt = 'thepackagehasbeendelivered';

        const encryptedMessage = alphabetCypher.performEncryption(messageToEncrypt, passKey);
        const expectedOutput = 'lumicjcnoxjhkomxpkwyqogywq';

        assert.equal(encryptedMessage, expectedOutput);
    });

    it('will decrypt a message using the key "snitch"', function () {
        const passKey = 'snitch';
        const messageToDecrypt = 'lumicjcnoxjhkomxpkwyqogywq';

        const decryptedMessage = alphabetCypher.performDecryption(messageToDecrypt, passKey);
        const expectedOutput = 'thepackagehasbeendelivered';

        assert.equal(decryptedMessage, expectedOutput);
    });

    it('will encrypt "theredfoxtrotsquietlyatmidnight" to "uvrufrsryherugdxjsgozogpjralhvg" with the key "bond"', function () {
        const passKey = 'bond';
        const messageToEncrypt = 'theredfoxtrotsquietlyatmidnight';

        const encryptedMessage = alphabetCypher.performEncryption(messageToEncrypt, passKey);
        const expectedOutput = 'uvrufrsryherugdxjsgozogpjralhvg';

        assert.equal(encryptedMessage, expectedOutput);
    });

    it('will encrypt "murderontheorientexpress" to "flrlrkfnbuxfrqrgkefckvsa" with the key "train"', function () {
        const passKey = 'train';
        const messageToEncrypt = 'murderontheorientexpress';

        const encryptedMessage = alphabetCypher.performEncryption(messageToEncrypt, passKey);
        const expectedOutput = 'flrlrkfnbuxfrqrgkefckvsa';

        assert.equal(encryptedMessage, expectedOutput);
    });

    it('will encrypt "themolessnuckintothegardenlastnight" to "zhvpsyksjqypqiewsgnexdvqkncdwgtixkx" with the key "garden"', function () {
        const passKey = 'garden';
        const messageToEncrypt = 'themolessnuckintothegardenlastnight';

        const encryptedMessage = alphabetCypher.performEncryption(messageToEncrypt, passKey);
        const expectedOutput = 'zhvpsyksjqypqiewsgnexdvqkncdwgtixkx';

        assert.equal(encryptedMessage, expectedOutput);
    });

    it('will decrypt "klatrgafedvtssdwywcyty" to "iamtheprettiestunicorn" with the key "cloak"', function () {
        const passKey = 'cloak';
        const messageToDecrypt = 'klatrgafedvtssdwywcyty';

        const decryptedMessage = alphabetCypher.performDecryption(messageToDecrypt, passKey);
        const expectedOutput = 'iamtheprettiestunicorn';

        assert.equal(decryptedMessage, expectedOutput);
    });

    it('will decrypt "pjphmfamhrcaifxifvvfmzwqtmyswst" to "alwayslookonthebrightsideoflife" with the key "python"', function () {
        const passKey = 'python';
        const messageToDecrypt = 'pjphmfamhrcaifxifvvfmzwqtmyswst';

        const decryptedMessage = alphabetCypher.performDecryption(messageToDecrypt, passKey);
        const expectedOutput = 'alwayslookonthebrightsideoflife';

        assert.equal(decryptedMessage, expectedOutput);
    });

    it('will decrypt "rcfpsgfspiecbcc" to "foryoureyesonly" with the key "moore"', function () {
        const passKey = 'moore';
        const messageToDecrypt = 'rcfpsgfspiecbcc';

        const decryptedMessage = alphabetCypher.performDecryption(messageToDecrypt, passKey);
        const expectedOutput = 'foryoureyesonly';

        assert.equal(decryptedMessage, expectedOutput);
    });
});