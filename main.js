const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('#nav');
const mainNav = document.querySelector('.main-nav')
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        navBtn.classList.add('open');
        nav.classList.add('open');
        mainNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else {
        navBtn.classList.remove('open');
        nav.classList.remove('open');
        mainNav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

function closeMenu() {
    mainNav.classList.remove("open");
}

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const portfolioLink = document.getElementById("portfolio-link");
const contactLink = document.getElementById("contact-link");

homeLink.addEventListener("click", function() {
  document.getElementById("home").scrollIntoView();
  closeMenu();
});

aboutLink.addEventListener("click", function() {
  document.getElementById("about").scrollIntoView();
  closeMenu();
});

portfolioLink.addEventListener("click", function() {
  document.getElementById("portfolio").scrollIntoView();
  closeMenu();
});

contactLink.addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView();
  closeMenu();
});
