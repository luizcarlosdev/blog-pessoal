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
    const navMarker1 = document.querySelector("#nav-marker-1");
    const nav_list_1 = document.querySelector("#nav-options-list1");
    openSettings.classList.toggle("openandclose1");
    if (openSettings.classList.contains("openandclose1")) {
        nav_list_1.style.display = "block";
        navMarker1.textContent = `\u2B9D`;
    } else {
        nav_list_1.style.display = "none";
        navMarker1.textContent = `\u2B9F`;
    }
});

const openCreate = document.querySelector("#openCreate");
openCreate.addEventListener("click", () => {
    const navMarker2 = document.querySelector("#nav-marker-2");
    const nav_list_2 = document.querySelector("#nav-options-list2");
    openCreate.classList.toggle("openandclose2");
    if (openCreate.classList.contains("openandclose2")) {
        nav_list_2.style.display = "block";
        navMarker2.textContent = `\u2B9D`;
    } else {
        nav_list_2.style.display = "none";
        navMarker2.textContent = `\u2B9F`;
    }
});

const openUser = document.querySelector("#openAccount");
openUser.addEventListener("click", () => {
    const navMarker3 = document.querySelector("#nav-marker-3");
    const nav_list_3 = document.querySelector("#nav-options-list3");
    openUser.classList.toggle("bah");
    if (openUser.classList.contains("bah")) {
        nav_list_3.style.display = "block";
        navMarker3.textContent = `\u2B9D`;
    } else {
        nav_list_3.style.display = "none";
        navMarker3.textContent = `\u2B9F`;
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
    document.querySelector("#navigation").style.display = "none";
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
    let imageDesc = [...document.querySelectorAll(".description-image")];
    let articleLink = [...document.querySelectorAll("article a")];
    let body = document.querySelector("body");
    if (darkModeButton.classList.contains("changeMode")) {
        body.style.background = "#0d1117";
        articleLink.map(el => {
            el.style.color = "#eee"
        })
        imageDesc.map((el) => {
            el.style.color = "#eee"
        })
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
        body.style.background = "#ffffff";
        articleLink.map(el => {
            el.style.color = "#000000c0"
        })
        imageDesc.map((el) => {
            el.style.color = "#444"
        })
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
        main.style.background = "#ffffff";
    }
    
})