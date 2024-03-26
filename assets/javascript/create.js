const inputPassword = document.querySelector("#input-password");
const buttonSignUp = document.querySelector("#btn-sign-up");

buttonSignUp.addEventListener("click", event => {
    event.preventDefault()
})

buttonSignUp.addEventListener("click",() => {
    buttonSignUp.classList.toggle("changeIconEye");
    const iconEyeSignUp = document.querySelector("#icons-eye-sig-up")
    if(buttonSignUp.classList.contains("changeIconEye")) {
        iconEyeSignUp.className = "fa-regular fa-eye";
        inputPassword.type = "text"
    } else {
        iconEyeSignUp.className = "fa-regular fa-eye-slash";
        inputPassword.type = "password"
    }
})