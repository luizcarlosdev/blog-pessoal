function openMenu() {
    const navigation = document.querySelector("#navigation");
    navigation.style.display = "block"
}

function closeMenu() {
    const navigation = document.querySelector("#navigation");
    navigation.style.display = "none"
}

let nav_list_disable = [...document.querySelectorAll(".nav-list-disable")];

nav_list_disable.map((elementosNav) => {
    elementosNav.addEventListener("click",(event) => {
        event.preventDefault()
        console.log("ok")
    })
})