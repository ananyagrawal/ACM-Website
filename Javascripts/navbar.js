const navbar = document.querySelector('.navbar');
const links = navbar.querySelectorAll('.link');
let currentActive = links[0];
links.forEach((link) => {
    link.addEventListener('click', (e) => {
    currentActive.parentElement.classList.remove('active');
    link.parentElement.classList.add('active');
    currentActive = link;
    });
  });
