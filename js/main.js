let hamburgerButton = document.querySelector(".hamburger-button");
let mainList = document.querySelector(".main-list");
let closeBtn = document.querySelector(".close-button");
let overlay = document.querySelector(".overlay");

hamburgerButton.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  overlay.classList.remove("hidden");
  mainList.classList.add("transition");
  closeBtn.classList.remove("hidden");
}

function closeMenu() {
  overlay.classList.add("hidden");
  mainList.classList.remove("transition");
  closeBtn.classList.add("hidden");
}
