// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const navbar = document.querySelector('nav');

// Mobile Menu Toggle
const toggleMobileMenu = () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
};

// Event Listeners
mobileMenuButton?.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton?.contains(e.target) && !mobileMenu?.contains(e.target)) {
        mobileMenu?.classList.add('hidden');
        mobileMenuButton?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            mobileMenu?.classList.add('hidden');
            mobileMenuButton?.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('overflow-hidden');
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    try {
        // Disable form while submitting
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Add your form submission logic here
        // For example:
        // await fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // });
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        e.target.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white transform transition-all duration-300 translate-y-full ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-y-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-y-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Initialize animations and performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Setup animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(element => {
        element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500', 'ease-out');
        animationObserver.observe(element);
    });

    // Setup lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        lazyImages.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => lazyImageObserver.observe(img));
    }

    // Add scroll event listener for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar?.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar?.classList.contains('scroll-down')) {
            navbar?.classList.remove('scroll-up');
            navbar?.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar?.classList.contains('scroll-down')) {
            navbar?.classList.remove('scroll-down');
            navbar?.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Update active navigation link based on scroll position
    const updateActiveNavLink = () => {
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
    };

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
}); 