'use strict';

function alphabetCypher() {
    const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function getDecryptedLetterIndex(keyLetterIndex, letterToDecryptIndex) {
        return ((alphabetMap.length - keyLetterIndex) + letterToDecryptIndex) % alphabetMap.length;
    }

    function getEncryptedLetterIndex(keyLetterIndex, letterToEncryptIndex) {
        return (keyLetterIndex + letterToEncryptIndex) % alphabetMap.length;
    }

    function applyCypher(messageToDecrypt, passKey, decryptionOperation) {
        let decryptedMessage = '';

        for (var i = 0; i < messageToDecrypt.length; i++) {
            const keyIndex = i % passKey.length;
            const keyLetter = passKey[keyIndex];

            const letterToDecrypt = messageToDecrypt[i];

            const keyLetterIndex = alphabetMap.indexOf(keyLetter.toUpperCase());
            const letterToDecryptIndex = alphabetMap.indexOf(letterToDecrypt.toUpperCase());

            const decryptedLetterIndex = decryptionOperation(keyLetterIndex, letterToDecryptIndex);

            const decryptedLetter = alphabetMap[decryptedLetterIndex];

            decryptedMessage += decryptedLetter;
        }

        return decryptedMessage;
    }

    function performDecryption(messageToDecrypt, passKey) {
        return applyCypher(messageToDecrypt, passKey, getDecryptedLetterIndex);
    }

    function performEncryption(messageToEncrypt, passKey) {
        return applyCypher(messageToEncrypt, passKey, getEncryptedLetterIndex);
    }

    return {
        performDecryption: performDecryption,
        performEncryption: performEncryption
    };
}

module.exports = alphabetCypher;