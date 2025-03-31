// 密碼應該使用加密方式處理，而不是明文提交
const password = "your_password";
const encryptedPassword = btoa(password); // Base64加密示範，實際中應使用更強的加密方式

console.log(encryptedPassword);
