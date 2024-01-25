import CryptoJS from 'crypto-js';

export function decrypt(text: string) {

    const bytes = CryptoJS.AES.decrypt(text, "cec08c484e890040a4ff");
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}