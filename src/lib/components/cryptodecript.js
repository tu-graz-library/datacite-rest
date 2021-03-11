// see: https://www.npmjs.com/package/crypto-js

import CryptoJS from "crypto-js";

export function DecryptAES(ciphertext, key, iv) {
//   console.log("ciphertext", ciphertext);
//   console.log("key", key);
//   console.log("iv", iv);
  var key = CryptoJS.enc.Hex.parse(key);
  var iv = CryptoJS.enc.Hex.parse(iv);

  const cipher = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
    }),
    result = CryptoJS.AES.decrypt(cipher, key, {
      iv: iv,
      mode: CryptoJS.mode.CFB,
    });

  return result.toString(CryptoJS.enc.Utf8);
}
