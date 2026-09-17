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
