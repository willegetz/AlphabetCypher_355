## [Challenge 355 [easy] Alphabet Cypher](https://www.reddit.com/r/dailyprogrammer/comments/879u8b/20180326_challenge_355_easy_alphabet_cipher/)

There is a simple command line interface to encrypt and decrypt messages made of letters only.
1. Clone the rpo
2. Run npm install

The parameters for the cli are:
-m or -message: which is the message to encrypt or decrypt
-k or -key: which is the key used in the process
-c or -cypherAction: which is what cypher action to perform. "e" for encryption and "d" for decryption

Example:
To encrypt a message:
    Directory Of Project> node ./secrets.js -m "Hello World" -k "blah" -c "e"

To decrypt a message:
    Directory Of Project> node ./secrets.js -m "iplsphoymo" -k "blah" -c "e"
