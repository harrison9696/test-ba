const hamburger = document.querySelector('.navbar__hamburger');
const closeBtn = document.querySelector('.nav-open__close-btn');
const navOpen = document.querySelector('.nav-open');

hamburger.addEventListener('click', () => {
	navOpen.classList.add('nav-active');
});

closeBtn.addEventListener('click', () => {
	navOpen.classList.remove('nav-active');
});
