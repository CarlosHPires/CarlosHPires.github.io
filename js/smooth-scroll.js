const internLinks = document.querySelectorAll('.header-menu a[href^="#"]');
console.log(internLinks);

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

internLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
