const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const slides = [
  { image: "assets/banner/slide-1.jpg", caption: "Banner temático da Semana Tecnológica UCPel 2026" },
  { image: "assets/banner/slide-2.jpg", caption: "Tecnologia, desenvolvimento web, IA e dados" },
  { image: "assets/banner/slide-3.jpg", caption: "Universidade, mercado e sociedade conectados pela tecnologia" }
];
const hero = document.querySelector(".hero");
const heroCaption = document.getElementById("heroCaption");
const dots = document.querySelectorAll(".hero-dot");
let currentSlide = 0;

function showSlide(index) {
  currentSlide = index;
  hero.style.backgroundImage = `url("${slides[index].image}")`;
  heroCaption.textContent = slides[index].caption;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 5000);
