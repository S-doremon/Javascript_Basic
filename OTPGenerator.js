function OTPGenerator(){
    let otp= ""
    otp = Math.floor(Math.random()*9000+1000)
    return otp
}

console.log("Your OTP", OTPGenerator());