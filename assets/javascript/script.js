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

let darkModeButton = document.querySelector("#dark-mode-btn");

darkModeButton.addEventListener("click", () => {
    darkModeButton.classList.toggle("changeMode");
    let msg = document.querySelector("#msg-nav-list1");
    let icon = document.querySelector("#icon-modes");
    let main = document.querySelector("main");
    let card = [...document.querySelectorAll(".cards")];
    let textCard = [...document.querySelectorAll("#text-card")];
    let textCardH2 = document.querySelectorAll(".news a");
    let th2 = [...textCardH2];
    let footerCard = [...document.querySelectorAll("#quant-views")];
    let articleParagraph = [...document.querySelectorAll("article p")];
    let tittleH1 = [...document.querySelectorAll("article h1")];
    let tittleH2 = [...document.querySelectorAll("article h2")];
    let tittleH3 = [...document.querySelectorAll("article h3")];
    let tittleH4 = [...document.querySelectorAll("article h4")];
    let tittleH5 = [...document.querySelectorAll("article h5")];
    let tittleH6 = [...document.querySelectorAll("article h6")];
    let heart = [...document.querySelectorAll(".icon-heart")];
    if (darkModeButton.classList.contains("changeMode")) {
        heart.map((el) => {
            el.style.color = "#eee"
        })
        tittleH6.map((el) => {
            el.style.color = "#eee"
        })
        tittleH5.map((el) => {
            el.style.color = "#eee"
        })
        tittleH4.map((el) => {
            el.style.color = "#eee"
        })
        tittleH3.map((el) => {
            el.style.color = "#eee"
        })
        tittleH2.map((el) => {
            el.style.color = "#eee"
        })
        tittleH1.map((el) => {
            el.style.color = "#eee"
        })
        articleParagraph.map((el) => {
            el.style.color = "#eee"
        })
        footerCard.map((el) => {
            el.style.color = "#eee"
        })
        th2.map((element) => {
            element.style.color = "#eee"
        })
        textCard.map((e) => {
            e.style.color = "#eee"
        })
        card.map((el) => {
            el.style.background = "#17181c";
            el.style.color = "#eee";
        })
        msg.textContent = "Light Mode";
        icon.className = "fa-solid fa-sun";
        main.style.background = "#0d1117";
    } else {
        heart.map((el) => {
            el.style.color = "#f00"
        })
        tittleH6.map((el) => {
            el.style.color = "#000"
        })
        tittleH5.map((el) => {
            el.style.color = "#000"
        })
        tittleH4.map((el) => {
            el.style.color = "#000"
        })
        tittleH3.map((el) => {
            el.style.color = "#000"
        })
        tittleH2.map((el) => {
            el.style.color = "#000"
        })
        tittleH1.map((el) => {
            el.style.color = "#000"
        })
        articleParagraph.map((el) => {
            el.style.color = "#000"
        })
        footerCard.map((el) => {
            el.style.color = "#444"
        })
        th2.map((element) => {
            element.style.color = "#444"
        })
        textCard.map((e) => {
            e.style.color = "#444"
        })
        card.map((el) => {
            el.style.background = "#fff";
            el.style.color = "#444";
        })
        msg.textContent = "Dark Mode";
        icon.className = "fa-solid fa-moon";
        main.style.background = "#fff";
    }
})