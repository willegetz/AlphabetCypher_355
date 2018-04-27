'use strict';

function alphabetCypher(){
    function performDecryption(messageToDecrypt, passKey){
        const alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let decryptedMessage = '';
    
        for (var i = 0; i < messageToDecrypt.length; i++) {
            const keyIndex = i % passKey.length;
            const keyLetter = passKey[keyIndex];
    
            const letterToDecrypt = messageToDecrypt[i];
            
            const keyLetterIndex = alphabetMap.indexOf(keyLetter.toUpperCase());

            const letterToDecryptIndex = alphabetMap.indexOf(letterToDecrypt.toUpperCase());
            const decryptedLetterIndex = ((alphabetMap.length - keyLetterIndex) + letterToDecryptIndex) % alphabetMap.length;

            const decryptedLetter = alphabetMap[decryptedLetterIndex];

            decryptedMessage += decryptedLetter;
        }
    
        return decryptedMessage;
    }

    function performEncryption(messageToEncrypt, passKey){
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

    return {
        performDecryption: performDecryption,
        performEncryption: performEncryption
    };
}

module.exports = alphabetCypher;