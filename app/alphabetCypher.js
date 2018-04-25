'use strict';

function alphabetCypher(){
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

    return {
        encryptString : encryptString
    };
}

module.exports = alphabetCypher;