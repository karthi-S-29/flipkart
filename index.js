// longin page


let otp1=document.querySelector(".otp")

let otperror=document.querySelector(".otperror")
let login_side=document.querySelector(".login_side")
let otp_side=document.querySelector(".otp_side")
let verpage=document.querySelector(".verpage")

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mobilePattern = /^[6-9][0-9]{9}$/;

let currentOtp = "";

function otpgen(){
    let inpemail_phone=document.querySelector(".inpemail_phone").value
    
    if (inpemail_phone === "") {
        otperror.innerHTML = "Please enter email or phone number";
        otperror.style.color = "red";
      } else if (emailPattern.test(inpemail_phone) || mobilePattern.test(inpemail_phone)) {
        otperror.innerHTML ="";
        otpresend()
        login_side.style.display="none"
        otp_side.style.display="flex"
        verpage.innerHTML=`Please enter the OTP sent to ${inpemail_phone}  <span style="color:blue" onclick="login()">Change</span>`
        } else {
        otperror.innerHTML = "Please check email or phone number";
        otperror.style.color = "red";
      }
      


}
function login(){
    login_side.style.display="flex"
    otp_side.style.display="none"      
}


function otpresend() {
  currentOtp = "";
  for (let i = 0; i < 6; i++) {
    currentOtp += Math.floor(Math.random() * 10);
  }
  alert("Your OTP: " + currentOtp); 
  // return currentOtp
}


function verify() {
  console.log(currentOtp)
    let otp_verify=document.querySelector(".otp_verify").value
    
  if (otp_verify==currentOtp) {
    alert("✅ Login success");
    window.location.href = "./Electronics.html";
  }
   else {
    alert("❌ Invalid OTP");
  }
}








