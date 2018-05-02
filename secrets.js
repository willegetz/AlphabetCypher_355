'use strict';

const alphabetCypher = require('./app/alphabetCypher')();
const args = require('args');

args
    .option('message', 'message to encrypt or decrypt, can only contain letters, must be enclosed in quotes')
    .option('key', 'key used to encrypt or decrypt a message, can only contain letters, must be enclosed in quotes')
    .option('cypherAction', '"e" for encrypt. "d" for decrypt')

const cypherArgs = args.parse(process.argv);
const message = cypherArgs.message;
const key = cypherArgs.key;
const cypherAction = cypherArgs.cypherAction;

if (!message || !key || !cypherAction) {
    console.log('Aruments are not correct.');
    args.showHelp();
    return;
} else if (!/^[a-zA-Z\s]+$/.test(message)) {
    console.log(`Message ${message} can only contain letters`);
    args.showHelp();
    return;
} else if (!/^[a-zA-Z\s]+$/.test(key)) {
    console.log(`Key ${key} can only contain letters`);
    args.showHelp();
    return;
} else if (!cypherAction === 'd' || !cypherAction === 'e') {
    console.log('Must specify either "e" for encrypt or "d" for decrypt');
    args.showHelp();
    return;
}

if (cypherAction === 'e') {
    const encryptedMessage = alphabetCypher.performEncryption(message, key);
    console.log(`\n\nYour encrypted message is:\n  ${encryptedMessage}\n\n`);
} else if(cypherAction === 'd'){
    const decryptedMessage = alphabetCypher.performDecryption(message, key);
    console.log(`\n\nYour decrypted message is:\n  ${decryptedMessage}\n\n`);
}

