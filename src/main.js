import './style.css'

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('mobile-active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });
}

// Initial trigger for scroll effect
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
}

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Language Toggle Logic
const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    langBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked
    btn.classList.add('active');
    
    const selectedLang = btn.getAttribute('data-lang');
    
    // Find all elements with data-en attribute
    const translatableElements = document.querySelectorAll('[data-en]');
    
    translatableElements.forEach(el => {
      // Set the innerHTML to the respective language attribute
      if (selectedLang === 'hi' && el.hasAttribute('data-hi')) {
        el.innerHTML = el.getAttribute('data-hi');
      } else {
        el.innerHTML = el.getAttribute('data-en');
      }
    });
  });
});

console.log('Dakha Devi Hospital Website Initialized');
