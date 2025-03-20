// Enhanced Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.25,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            // Update active nav link
            const id = entry.target.id;
            navItems.forEach(item => {
                item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Form Submission with Animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        
        try {
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
            
            button.innerHTML = '<i class="fas fa-check"></i> Sent!';
            button.classList.add('success');
            contactForm.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('success');
            }, 3000);
        } catch (error) {
            button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            button.classList.add('error');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('error');
            }, 3000);
        }
    });
}

// Skill Category Animation
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.classList.add('active');
    });
    
    category.addEventListener('mouseleave', () => {
        category.classList.remove('active');
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-dark/95 backdrop-blur-md z-40 transform transition-transform duration-300 translate-x-full md:hidden';
    mobileMenu.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#home" class="text-white text-xl hover:text-secondary transition-colors">Home</a>
            <a href="#about" class="text-white text-xl hover:text-secondary transition-colors">About</a>
            <a href="#skills" class="text-white text-xl hover:text-secondary transition-colors">Skills</a>
            <a href="#projects" class="text-white text-xl hover:text-secondary transition-colors">Projects</a>
            <a href="#contact" class="text-white text-xl hover:text-secondary transition-colors">Contact</a>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    let isMenuOpen = false;

    mobileMenuButton.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
            isMenuOpen = false;
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('text-primary');
        }
    });
}); 