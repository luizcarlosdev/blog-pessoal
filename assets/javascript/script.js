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