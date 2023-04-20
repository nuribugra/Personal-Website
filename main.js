// Navbar
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("#nav");
const mainNav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

navBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
   if (!showMenu) {
      navBtn.classList.add("open");
      nav.classList.add("open");
      mainNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));

      showMenu = true;
   } else {
      navBtn.classList.remove("open");
      nav.classList.remove("open");
      mainNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));

      showMenu = false;
   }
}

function closeMenu() {
   navBtn.classList.remove("open");
   nav.classList.remove("open");
   mainNav.classList.remove("open");
   navItems.forEach((item) => item.classList.remove("open"));
}

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const portfolioLink = document.getElementById("portfolio-link");
const contactLink = document.getElementById("contact-link");

homeLink.addEventListener("click", function () {
   document.getElementById("home").scrollIntoView();
   closeMenu();
});

aboutLink.addEventListener("click", function () {
   document.getElementById("about").scrollIntoView();
   closeMenu();
});

portfolioLink.addEventListener("click", function () {
   document.getElementById("portfolio").scrollIntoView();
   closeMenu();
});

contactLink.addEventListener("click", function () {
   document.getElementById("contact").scrollIntoView();
   closeMenu();
});

// Toggle Dark/Light Mode
const toggle = document.getElementById('toggleMode');
const body = document.querySelector('body');
const contactTitle = document.getElementById('contactTitle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

toggle.addEventListener('click', function() {
   this.classList.toggle('bi-moon');
   if (this.classList.toggle('bi-brightness-high-fill')) {
      body.style.background =  '#F0F0F0';
      body.style.color = '#454545';
      body.style.transition = '2s';
      contactTitle.style.color = '#3C486B';
      header.style.background =  '#3C79F5';
      footer.style.background =  '#3C79F5';
      header.style.transition = '2s';
      footer.style.transition = '2s';
   }else {
      body.style.background =  '#454545';
      body.style.color = '#F0F0F0';
      body.style.transition = '2s';
      contactTitle.style.color = '#F0F0F0';
      header.style.background =  '#3C486B';
      footer.style.background =  '#3C486B';
      header.style.transition = '2s';
      footer.style.transition = '2s';
   }
});
