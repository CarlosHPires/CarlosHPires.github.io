ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1200,
  delay: 100,
  origin: "top",
});

// About me //

const aboutMeTitle = document.querySelector(".about-me-title");
const aboutMeParagraphs = document.querySelectorAll(".about-me-paragraph");
const meImg = document.querySelector(".me-img");
ScrollReveal().reveal(aboutMeTitle, { rotate: { x: 10, z: 20 } });
ScrollReveal().reveal(aboutMeParagraphs, { delay: 400 });
ScrollReveal().reveal(meImg, { delay: 600, origin: "left" });

// Projects //

const projectDo = document.querySelector(".project-do");
const projectImage1 = document.querySelector(".projects-images1");
const projectImage2 = document.querySelector(".projects-images2");
const projectImage3 = document.querySelector(".projects-images3");
const projectImage4 = document.querySelector(".projects-images4");
const projectImage5 = document.querySelector(".projects-images5");
const projectImage6 = document.querySelector(".projects-images6");
ScrollReveal().reveal(projectDo, { delay: 250, origin: "right" });
ScrollReveal().reveal(projectImage1, {
  delay: 200,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(projectImage2, {
  delay: 400,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(projectImage3, {
  delay: 600,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(projectImage4, {
  delay: 800,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(projectImage5, {
  delay: 1000,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(projectImage6, {
  delay: 1200,
  origin: "top",
  distance: "200px",
  duration: 1000,
});
