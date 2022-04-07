import { JSEncrypt } from 'jsencrypt'
import  cryptoJs  from 'crypto-js'
import { test } from 'shelljs';

let Base64 = require("js-base64").Base64;
export function encryptCBC(message, key = 'sH!i7pvV', iv ='sH!I3pVv') {
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var ivHex = cryptoJs.enc.Utf8.parse(iv);
  const option = {
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.Pkcs7,
    iv: ivHex
  }
  const encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.toString()
}
//wLzKAodp2QL9yLgHolJz9Q==  CN99331381.7
export function decryptDes(message, key = 'sH!i7pvV', iv = 'sH!I3pVv') {
  //message = Base64.decode(message);
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var ivHex = cryptoJs.enc.Utf8.parse(iv);
  const decrypted = cryptoJs.DES.decrypt(
    message,// 若message是base64格式，则无需转16进制hex，直接传入message即可
    keyHex,
    {
      iv: ivHex,
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7
    }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}
export function setEncrypt(str) {
  let jse = new JSEncrypt();
  let PUBLIC_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvnuBHhh9/Mwi4Z8Ea2IfVc7SJYyKkJT+4m4LBJbgxRVPa+ej1iAvJAJ++1CNfH6oVr6tw/wqEIZybTG7+iPm7SzfoW9eb/LYsLR43zLqriYWy7qAd7S/13zILiAGLUy/h9CDYwoXYaNXanVGe0iJb+NXmg7f4MAEo7rR15QHQ8zDtomPI/Fz9vz+o/xzHqsLVnxZIpn4dlCp+7QtzOePnvEda5xqWk4DNaVV2fr9gwfBFd8MyAP+CyBXLAWpmxinRU6knsLKAlqcbOLNjk2+aPNvH9EWHODKWBuMPpdDwQexD+V3/nOp8c07NzSfwXmlZuRKod9SqVY88Pg1r84WwQIDAQAB';

  jse.setPublicKey(PUBLIC_KEY);
  let data = jse.encrypt(str);  // 进行加密
  //alert(JSON.stringify(jse));
  return data;
}
