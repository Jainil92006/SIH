// JavaScript to dynamically set the current year in the copyright section
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').textContent = `© ${currentYear} Anti-Doping (DopaSafe). All Rights Reserved.`;
