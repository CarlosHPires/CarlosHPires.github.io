const arrow = document.querySelector(".arrow-img-anime");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    arrow.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
  }
});
