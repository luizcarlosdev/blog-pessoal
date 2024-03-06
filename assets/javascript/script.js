function openMenu() {
    const navigation = document.querySelector("#navigation");
    navigation.style.display = "block"
}

function closeMenu() {
    const navigation = document.querySelector("#navigation");
    navigation.style.display = "none"
};

let nav_list_disable = [...document.querySelectorAll(".nav-list-disable")];

nav_list_disable.map((elementosNav) => {
    elementosNav.addEventListener("click", (event) => {
        event.preventDefault();
    })
});

const openSettings = document.querySelector("#OpenSettings");
openSettings.addEventListener("click", () => {
    const nav_list_1 = document.querySelector("#nav-options-list1");
    openSettings.classList.toggle("openandclose1");
    if (openSettings.classList.contains("openandclose1")) {
        nav_list_1.style.display = "block"
    } else {
        nav_list_1.style.display = "none"
    }
});

const openCreate = document.querySelector("#openCreate");
openCreate.addEventListener("click", () => {
    const nav_list_2 = document.querySelector("#nav-options-list2");
    openCreate.classList.toggle("openandclose2");
    if (openCreate.classList.contains("openandclose2")) {
        nav_list_2.style.display = "block";
    } else {
        nav_list_2.style.display = "none";
    }
});

const openUser = document.querySelector("#openAccount");
openUser.addEventListener("click", () => {
    const nav_list_3 = document.querySelector("#nav-options-list3");
    openUser.classList.toggle("bah");
    if (openUser.classList.contains("bah")) {
        nav_list_3.style.display = "block";
    } else {
        nav_list_3.style.display = "none";
    }
});

function changeHeart() {
    const heartIcon = document.querySelector("#icon-heart");
    const btnHeart = document.querySelector("#icon-card button");
    btnHeart.classList.toggle("heartBroken");
    if (btnHeart.classList.contains("heartBroken")) {
        heartIcon.className = "fa-solid fa-heart";
    } else {
        heartIcon.className = "fa-regular fa-heart";
    }
}

const darkModeButton = document.querySelector("#dark-mode-btn");
const msgDarkMode = document.querySelector("#msg-nav-list1");
const main = document.querySelector("main");
const body = document.body;
darkModeButton.addEventListener("click", () => {
    console.log("bfywea")
    darkModeButton.classList.toggle("darMode");
    if (darkModeButton.classList.contains("darkMode")) {
        body.style.backgroundColor = "#1C1C1C"
        main.style.backgroundColor = "#1C1C1C"
        msgDarkMode.textContent = "Light Mode";
    } else {
        body.style.background = "#eee";
        main.style.background = "#eee";
        msgDarkMode.textContent = "Dark Mode";
    }
})
