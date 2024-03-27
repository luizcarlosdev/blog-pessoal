const inputPasswordSignUp = document.querySelector("#input-password");
const buttonSignUpEye = document.querySelector("#btn-sign-up");
const buttonSubmitSignUp = document.querySelector("#button-submit-signUp");

// buttonSubmitSignUp.addEventListener("click", event => {
//     event.preventDefault()
// })

buttonSignUpEye.addEventListener("click", event => {
    event.preventDefault()
});

buttonSignUpEye.addEventListener("click", () => {
    buttonSignUpEye.classList.toggle("changeIconEye");
    const iconEyeSignUp = document.querySelector("#icons-eye-sig-up")
    if (buttonSignUpEye.classList.contains("changeIconEye")) {
        iconEyeSignUp.className = "fa-regular fa-eye";
        inputPasswordSignUp.type = "text"
    } else {
        iconEyeSignUp.className = "fa-regular fa-eye-slash";
        inputPasswordSignUp.type = "password"
    }
});

buttonSubmitSignUp.addEventListener("click",() => {
    const userLoginMain = document.querySelector("#user-login-main");
    const userLoginMainName = document.querySelector("#user-login-main-name span");
    const userLoginMainTime = document.querySelector("#user-login-main-time span");
    const tittleH2NavaHeader = document.querySelector("#nav-header h2");
    tittleH2NavaHeader.style.display = "none";
    userLoginMain.style.display = "block"
})