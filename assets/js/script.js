// Global Variables
let currentLanguage = 'ar'; // Default to Arabic
const phoneNumber = '+966502305657'; // WhatsApp number

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Handle URL changes without page reload (browser navigation)
window.addEventListener('popstate', function() {
    smoothScrollToSection();
});

// Initialize Website
function initializeWebsite() {
    detectLanguageFromURL();
    setupTranslations();
    setupMobileNavigation();
    setupScrollAnimations();
    setupSmoothScrolling();
    setupNavbarScrollEffect();
    setupIntersectionObserver();
    setupParallaxEffect();
    addLoadingAnimations();
    updateLanguageToggle();
    smoothScrollToSection(); // Add this to handle URL-based scrolling
}

// Detect Language from URL
function detectLanguageFromURL() {
    const path = window.location.pathname;
    
    if (path.includes('/en') || path.startsWith('/en')) {
        currentLanguage = 'en';
    } else {
        currentLanguage = 'ar';
    }
    
    // Set HTML attributes
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Update body class
    document.body.className = document.body.className.replace(/lang-\w+/g, '');
    document.body.classList.add(`lang-${currentLanguage}`);
}

function smoothScrollToSection(){
    const path = window.location.pathname;
    
    // Extract section name from path
    let sectionName = '';
    
    // Handle different URL formats
    if (path === '/' || path === '/en' || path === '/en/') {
        // Home page - no scrolling needed
        return;
    }
    
    // Remove leading slash and language prefix
    let cleanPath = path.replace(/^\//, ''); // Remove leading slash
    
    // If path starts with 'en/', remove it
    if (cleanPath.startsWith('en/')) {
        cleanPath = cleanPath.replace('en/', '');
    }
    
    // Remove trailing slash if present
    cleanPath = cleanPath.replace(/\/$/, '');
    
    // If we have a section name, scroll to it
    if (cleanPath) {
        sectionName = cleanPath;
        
        console.log('Scrolling to section:', sectionName);
        
        const target = document.getElementById(sectionName);
        
        if (target) {
            // Add a small delay to ensure page is fully loaded
            setTimeout(() => {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            console.warn('Section not found:', sectionName);
        }
    }
}

// Setup Translations
function setupTranslations() {
    if (currentLanguage === 'en' && typeof translations !== 'undefined') {
        applyTranslations();
    }
    
    // Update meta tags
    updateMetaTags();
}

// Apply Translations
function applyTranslations() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Get Translation by Key
function getTranslation(key) {
    const keys = key.split('.');
    let translation = translations;
    
    for (const k of keys) {
        translation = translation[k];
        if (!translation) {
            return null;
        }
    }
    
    return translation;
}

// Update Meta Tags
function updateMetaTags() {
    if (currentLanguage === 'en' && typeof translations !== 'undefined') {
        // Update title
        document.title = translations.meta.title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', translations.meta.description);
        }
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', translations.meta.keywords);
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', translations.meta.ogTitle);
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', translations.meta.ogDescription);
        }
        
        // Update Twitter Card tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', translations.meta.twitterTitle);
        }
        
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', translations.meta.twitterDescription);
        }
    }
}

// Update Language Toggle
function updateLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        if (currentLanguage === 'ar') {
            langToggle.textContent = 'English';
            langToggle.href = '/en';
        } else {
            langToggle.textContent = 'عربي';
            langToggle.href = '/';
        }
    }
}

// Mobile Navigation
function setupMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Scroll Animations with Intersection Observer
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('bouquet-card') || 
                    entry.target.classList.contains('wedding-card')) {
                    const cards = entry.target.parentElement.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll(`
        .section-header,
        .bouquet-card,
        .wedding-card,
        .feature,
        .value,
        .contact-item,
        .custom-orders-text,
        .custom-orders-image,
        .about-text,
        .about-image
    `);
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Scroll Animations
function setupScrollAnimations() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            const speed = scrolled * 0.5;
            heroImage.style.transform = `translateY(${speed}px)`;
        }
        
        // Update scroll indicator
        updateScrollIndicator();
    });
}

// Parallax Effect
function setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Update Scroll Indicator
function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.pageYOffset;
    
    if (scrollIndicator) {
        if (scrollTop > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    }
}

// Loading Animations
function addLoadingAnimations() {
    // Add loading animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Stagger animation for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease-out';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
}

// WhatsApp Integration
function openWhatsApp() {
    let message;
    
    if (currentLanguage === 'en' && typeof translations !== 'undefined') {
        message = translations.whatsapp.defaultMessage;
    } else {
        message = 'أهلاً، أبغا أستفسر عن الباقات الموجودة.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Bouquet Card Interactions
function setupBouquetInteractions() {
    const bouquetCards = document.querySelectorAll('.bouquet-card');
    
    bouquetCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click event for mobile
        card.addEventListener('click', () => {
            const overlay = card.querySelector('.bouquet-overlay');
            overlay.style.transform = overlay.style.transform === 'translateY(0px)' 
                ? 'translateY(100%)' 
                : 'translateY(0px)';
        });
    });
}

// Contact Form Enhancement (if form is added later)
function setupContactForm() {
    const form = document.querySelector('#contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            let loadingText = 'جاري الإرسال...';
            if (currentLanguage === 'en' && typeof translations !== 'undefined') {
                loadingText = translations.notifications.sending;
            }
            
            submitBtn.textContent = loadingText;
            submitBtn.disabled = true;
            
            try {
                // Here you would typically send the form data to your backend
                // For now, we'll simulate a successful submission
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                let successMessage = 'تم إرسال رسالتك بنجاح!';
                if (currentLanguage === 'en' && typeof translations !== 'undefined') {
                    successMessage = translations.notifications.messageSent;
                }
                
                showNotification(successMessage, 'success');
                form.reset();
            } catch (error) {
                let errorMessage = 'حدث خطأ في إرسال الرسالة';
                if (currentLanguage === 'en' && typeof translations !== 'undefined') {
                    errorMessage = translations.notifications.messageError;
                }
                
                showNotification(errorMessage, 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const isRTL = currentLanguage === 'ar';
    const position = isRTL ? 'left: 20px;' : 'right: 20px;';
    const transform = isRTL ? 'translateX(-400px)' : 'translateX(400px)';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        ${position}
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: ${transform};
        transition: transform 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
        direction: ${isRTL ? 'rtl' : 'ltr'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = transform;
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Language Toggle Link Handler
function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Navigate to the appropriate URL
            if (currentLanguage === 'ar') {
                window.location.href = '/en';
            } else {
                window.location.href = '/';
            }
        });
    }

    // Update navigation links with proper language prefix
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.querySelectorAll("a:not(#lang-toggle)").forEach((item) => {
            const href = item.getAttribute('href');
            // Only modify internal links that start with # or /
            if (href && (href.startsWith('#') || href.startsWith('/'))) {
                // For hash links, prefix with language
                if (href.startsWith('#')) {
                    item.href = currentLanguage === 'en' ? `/en${href}` : href;
                } else {
                    // For path links, ensure proper language prefix
                    const cleanPath = href.replace(/^\/(?:en\/)?/, '/');
                    item.href = currentLanguage === 'en' ? `/en${cleanPath}` : cleanPath;
                }
            }
        });
    }
}

// Image Lazy Loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Optimizations
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    };
    
    // Preload critical resources
    const criticalImages = [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
        // Add other critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupBouquetInteractions();
    setupContactForm();
    setupLanguageToggle();
    setupLazyLoading();
    optimizePerformance();


    document.querySelectorAll(".date-year").forEach((item) => {
        item.innerText = (new Date()).getFullYear();
    })
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Handle Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Handle language toggle with Alt+L
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.click();
        }
    }
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}

// Google Analytics or other tracking (placeholder)
function trackEvent(action, category, label) {
    // Implement your analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            custom_parameter_language: currentLanguage
        });
    }
}

// Track WhatsApp clicks
const originalOpenWhatsApp = openWhatsApp;
openWhatsApp = function() {
    trackEvent('click', 'whatsapp', 'contact_button');
    originalOpenWhatsApp();
};

// Export functions for global access
window.openWhatsApp = openWhatsApp;
window.currentLanguage = currentLanguage; 