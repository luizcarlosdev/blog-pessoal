function openMenu() {
  const navigation = document.querySelector("#navigation");
  navigation.style.display = "block";
}

function closeMenu() {
  const navigation = document.querySelector("#navigation");
  navigation.style.display = "none";
}

let nav_list_disable = [...document.querySelectorAll(".nav-list-disable")];

nav_list_disable.map((elementosNav) => {
  elementosNav.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const openSettings = document.querySelector("#OpenSettings");
openSettings.addEventListener("click", () => {
  const navMarker1 = document.querySelector("#nav-marker-1");
  const nav_list_1 = document.querySelector("#nav-options-list1");
  openSettings.classList.toggle("openandclose1");
  if (openSettings.classList.contains("openandclose1")) {
    nav_list_1.style.display = "block";
    navMarker1.textContent = `\u2227`;
  } else {
    nav_list_1.style.display = "none";
    navMarker1.textContent = `\u2228`;
  }
});

const openCreate = document.querySelector("#openCreate");
openCreate.addEventListener("click", () => {
  const navMarker2 = document.querySelector("#nav-marker-2");
  const nav_list_2 = document.querySelector("#nav-options-list2");
  openCreate.classList.toggle("openandclose2");
  if (openCreate.classList.contains("openandclose2")) {
    nav_list_2.style.display = "block";
    navMarker2.textContent = `\u2227`;
  } else {
    nav_list_2.style.display = "none";
    navMarker2.textContent = `\u2228`;
  }
});

const openUser = document.querySelector("#openAccount");
openUser.addEventListener("click", () => {
  const navMarker3 = document.querySelector("#nav-marker-3");
  const nav_list_3 = document.querySelector("#nav-options-list3");
  openUser.classList.toggle("bah");
  if (openUser.classList.contains("bah")) {
    nav_list_3.style.display = "block";
    navMarker3.textContent = `\u2227`;
  } else {
    nav_list_3.style.display = "none";
    navMarker3.textContent = `\u2228`;
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

function changeHeart2() {
  const heartIcon = document.querySelector("#icon-hear2t");
  const btnHeart = document.querySelector("#icon-card2 button");
  btnHeart.classList.toggle("heartBroken");
  if (btnHeart.classList.contains("heartBroken")) {
    heartIcon.className = "fa-solid fa-heart";
  } else {
    heartIcon.className = "fa-regular fa-heart";
  }
}

const listDarkTheme = document.querySelector("#list-dark");
listDarkTheme.addEventListener("click", () => {
  const blockOptions = document.querySelector("#block-options");
  listDarkTheme.classList.toggle("theme");
  if (listDarkTheme.classList.contains("theme")) {
    blockOptions.style.display = "block";
  } else {
    blockOptions.style.display = "none";
  }
});

let darkModeButton = document.querySelector("#dark-mode-btn");

