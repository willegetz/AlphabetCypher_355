'use strict';

function alphabetCypher(){
    function encryptOrDecryptString(messageToEncrypt, passKey) {
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

    function performDecryption(messageToDecrypt, passKey){
        return encryptOrDecryptString(messageToDecrypt, passKey);
    }

    function performEncryption(messageToEncrypt, passKey){
        return encryptOrDecryptString(messageToEncrypt, passKey);
    }

    return {
        performDecryption: performDecryption,
        performEncryption: performEncryption
    };
}

module.exports = alphabetCypher;