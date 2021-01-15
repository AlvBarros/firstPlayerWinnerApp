// const NodeRSA = require('node-rsa');
// const CryptoJS = require('crypto-js');
// const Storage = require('@react-native-async-storage/async-storage');

// const key = new NodeRSA();

// let privateKey = new NodeRSA();
// let publicKey = new NodeRSA();

// const init = async () => {
//     key.generateKeyPair();
//     let public = key.exportKey('public');
//     let private = key.exportKey('private');
//     await Storage.setItem('@privateKey', private);
//     const publicKeyToReturn = CryptoJS.AES.encrypt(public, 'ndiun239x/%6usnANYT9239327x/0').toString();
//     return publicKeyToReturn;
// }

// const decrypt = (public, valor) => {
//     publicKey.importKey(publicBeforeDecrypt);
//     const decyptValue = publicKey.decryptPublic(valor, 'utf-8')
//     console.log(decyptValue);
//     return decyptValue;
// }

// const encrypt = (private, value) => {
//     privateKey.importKey(private);
//     const encryptValue = privateKey.encryptPrivate(valor, "base64");
//     console.log(encryptValue);
//     return encryptValue;
// }

// module.exports = {init, decrypt, encrypt};