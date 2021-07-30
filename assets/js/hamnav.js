function toggleanimate() {
  let toggleAnimate = document.querySelector(".header__ham");
  let nav = document.querySelector(".header__nav");
  let backdrop = document.querySelector(".back-drop");
  if (
    toggleAnimate.className === "header__ham" ||
    nav.className === "header__nav"
  ) {
    toggleAnimate.className += " active";
    nav.className += " open";
    backdrop.style.display = "block";
  } else {
    toggleAnimate.className = "header__ham";
    nav.className = "header__nav";
    backdrop.style.display = "none";
  }
}
