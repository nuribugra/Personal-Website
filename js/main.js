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

// Articles Functionality
let currentPage = 1;
const articlesPerPage = 3;

async function fetchArticles(page = 1) {
   try {
      const response = await fetch(`http://localhost:5000/articles?page=${page}&per_page=6`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error("Could not fetch articles:", error);
  }
}

function displayArticles(articles) {
   const container = document.getElementById('articles-container');
   container.innerHTML = '';
   articles.forEach(article => {
       const articleElement = document.createElement('div');
       articleElement.className = 'article-card';
       articleElement.innerHTML = `
            <h2 class="article-title">${article.title}</h2>
            <p class="article-excerpt">${article.content.substring(0, 100)}...</p>
            <button class="read-more" onclick="showArticleDetails(${article.id})">Read More</button>
       `;
       container.appendChild(articleElement);
   });
}

function displayPagination(currentPage, totalPages) {
   const paginationContainer = document.getElementById('pagination');
   paginationContainer.innerHTML = '';

   for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.innerText = i;
      pageButton.className = i === currentPage ? 'active' : '';
      pageButton.addEventListener('click', () => loadArticles(i));
      paginationContainer.appendChild(pageButton);
   }
}

async function fetchArticleDetails(articleId) {
   try {
       const response = await fetch(`http://localhost:5000/article/${articleId}`);
       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }
       return await response.json();
   } catch (error) {
       console.error("Could not fetch article details:", error);
   }
}

async function showArticleDetails(articleId) {
   const article = await fetchArticleDetails(articleId);
   if (article) {
       const detailsContainer = document.getElementById('article-details');
       detailsContainer.innerHTML = `
           <h2>${article.title}</h2>
           <p>${article.content}</p>
           <button onclick="hideArticleDetails()">Back to List</button>
       `;
       detailsContainer.style.display = 'block';
       document.getElementById('articles-container').style.display = 'none';
       document.getElementById('pagination').style.display = 'none';
   }
}

function hideArticleDetails() {
   document.getElementById('article-details').style.display = 'none';
   document.getElementById('articles-container').style.display = 'block';
   document.getElementById('pagination').style.display = 'flex';
}

async function loadArticles(page = 1) {
   const data = await fetchArticles(page);
    if (data && data.articles.length > 0) {
        displayArticles(data.articles);
        displayPagination(data.current_page, data.total_pages);
    } else {
        console.log("No articles found or error occurred");
    }
}

// Load initial articles
document.addEventListener('DOMContentLoaded', () => loadArticles(1));
















// Toggle Dark/Light Mode
/*const toggle = document.getElementById('toggleMode');
const body = document.querySelector('body');
const contactTitle = document.getElementById('contactTitle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const brandBorder = document.querySelectorAll('.brand-logo');

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
      brandBorder.forEach((item) => item.style.backgroundColor = '#F0F0F0');
   }else {
      body.style.background =  '#454545';
      body.style.color = '#F0F0F0';
      body.style.transition = '2s';
      contactTitle.style.color = '#F0F0F0';
      header.style.background =  '#3C486B';
      footer.style.background =  '#3C486B';
      header.style.transition = '2s';
      footer.style.transition = '2s';
      brandBorder.forEach((item) => item.style.backgroundColor = '#F0F0F0');
   }
});*/
