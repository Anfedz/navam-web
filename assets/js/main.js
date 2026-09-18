document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = btn.closest(".dropdown");
    const isOpen = dropdown.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));

    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) {
        d.classList.remove("open");
        d.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown.open").forEach((d) => {
    d.classList.remove("open");
    d.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
  });
});

const carousel = document.getElementById("about-carousel");

if (carousel) {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function startAutoplay() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAutoplay() {
    clearInterval(timer);
  }

  carousel.querySelector(".carousel-prev").addEventListener("click", () => {
    goTo(current - 1);
    stopAutoplay();
    startAutoplay();
  });

  carousel.querySelector(".carousel-next").addEventListener("click", () => {
    goTo(current + 1);
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      stopAutoplay();
      startAutoplay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}
