const crypto=require("crypto")
let SECRET="secret"
let hashedPassword=crypto.createHmac("sha256",SECRET).update("123456").digest("hex")
console.log(hashedPassword);