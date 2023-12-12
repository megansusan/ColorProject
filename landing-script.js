// landing-script.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1);
        if (target === 'about') {
          createFullScreenPage(); // Create full-screen page
        } else {
          document.querySelector('#' + target).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });

  const column1 = document.querySelector('.column1 a');
  if (column1) {
    column1.addEventListener('click', function (e) {
      // Prevent the default behavior of the anchor tag
      e.preventDefault();
      // Redirect to landing.html when column1 is clicked
      window.location.href = 'index.html';
    });
  }

  
  function createFullScreenPage() {
    const fullScreenPage = document.createElement('div');
    fullScreenPage.classList.add('full-screen-page');
  
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
  
  
    fullScreenPage.appendChild(pageContent);
    document.body.appendChild(fullScreenPage);
  }
  