const fPassword = document.querySelector("#f_password");
const btnPassword = document.querySelector("#password-button");
const iconEye = document.querySelector("#icon-eye");

btnPassword.addEventListener("click",event => {
    event.preventDefault()
})

// Verifica se os elementos existem antes de adicionar o ouvinte de eventos
if (fPassword && btnPassword && iconEye) {
    btnPassword.addEventListener("click", () => {
        // Alterna a classe showPassword
        fPassword.classList.toggle("showPassword");
        
        // Verifica a presença da classe showPassword para mudar o tipo e o ícone
        if (fPassword.classList.contains("showPassword")) {
            fPassword.type = "text";
            iconEye.className = "fa-regular fa-eye-slash";
        } else {
            fPassword.type = "password";
            iconEye.className = "fa-regular fa-eye";
        }
    });
} else {
    console.error("Um ou mais elementos não foram encontrados no DOM.");
}
