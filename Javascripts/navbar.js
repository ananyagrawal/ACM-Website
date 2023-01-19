const navbar = document.querySelector('.navbar');
const links = navbar.querySelectorAll('#link');
const allLinks = document.querySelector('.all-links');
let currentActive = links[0];

links.forEach((link) => {
    link.addEventListener('click', (e) => {
    if(screen.width < 600) {
      allLinks.style.display = 'none';
    }
    currentActive.parentElement.classList.remove('active');
    link.parentElement.classList.add('active');
    currentActive = link;
    });
  });

const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', () => {
  if(allLinks.id === 'none') {
    allLinks.removeAttribute('id');
  }
  else {
    allLinks.setAttribute('id', 'none');
  }
});
