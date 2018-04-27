'use strict';

function alphabetCypher() {
    const alphabetMap = 'abcdefghijklmnopqrstuvwxyz';

    function getDecryptedLetterIndex(keyLetterIndex, letterToDecryptIndex) {
        return ((alphabetMap.length - keyLetterIndex) + letterToDecryptIndex) % alphabetMap.length;
    }

    function getEncryptedLetterIndex(keyLetterIndex, letterToEncryptIndex) {
        return (keyLetterIndex + letterToEncryptIndex) % alphabetMap.length;
    }

    function applyCypher(messageCypher, passKey, cypherOperation) {
        let cypheredMessage = '';

        for (var i = 0; i < messageCypher.length; i++) {
            const keyIndex = i % passKey.length;
            const keyLetter = passKey[keyIndex];
            const keyLetterIndex = alphabetMap.indexOf(keyLetter);

            const letterToCypher = messageCypher[i];
            const letterToCypherIndex = alphabetMap.indexOf(letterToCypher);

            const cypheredLetterIndex = cypherOperation(keyLetterIndex, letterToCypherIndex);
            const cypheredLetter = alphabetMap[cypheredLetterIndex];

            cypheredMessage += cypheredLetter;
        }

        return cypheredMessage;
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