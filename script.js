// ======== TYPEWRITER EFFECT ========
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I’m Dipali Kunwar";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 120);
    }
  }
  type();
});

// ======== MOBILE MENU TOGGLE ========
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  // Create hamburger icon dynamically
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  nav.querySelector('.nav-container').appendChild(hamburger);

  // Toggle nav menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close nav on link click (for mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});

// ======== SCROLL REVEAL ANIMATION ========
const revealElements = document.querySelectorAll('section, header');
window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
