/* =====================================================
   SIDEBAR TOGGLE
===================================================== */
const navBtn = document.getElementById("nav-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

/* Tutup sidebar jika klik di luar */
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !navBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

/* =====================================================
   DATE (FOOTER TAHUN OTOMATIS)
===================================================== */
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/* =====================================================
   DARK MODE
===================================================== */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Ubah icon bulan & matahari
  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
  }
});

/* =====================================================
   BOOTSTRAP DROPDOWN FIX (MOBILE)
===================================================== */
const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const menu = this.nextElementSibling;
      menu.classList.toggle("show");
    }
  });
});

/* Tutup dropdown jika klik luar (mobile) */
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    const menu = dropdown.nextElementSibling;
    if (menu.classList.contains("show") && !dropdown.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});

/* =====================================================
   ACTIVE LINK NAVBAR
===================================================== */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active-link");
  }
});

/* =====================================================
   SCROLL NAVBAR EFFECT
===================================================== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#06412e";
    navbar.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "#0b6545";
    navbar.style.boxShadow = "none";
  }
});
