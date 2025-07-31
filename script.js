// Dubai Real Estate Website - JavaScript
// Author: Vilas Aade Real Estate

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeLoadingScreen();
    initializeAnimations();
    initializeProperties();
    initializeDevelopers();
    initializeTestimonials();
    initializeContactForm();
    initializeScrollEffects();
    initializeBackToTop();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Loading screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    });
}

// Scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Add animation class to elements
    const animateElements = document.querySelectorAll('.property-card, .developer-card, .service-card, .stat-card, .testimonial-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Properties data and functionality
function initializeProperties() {
    const propertiesData = [
        {
            id: 1,
            title: "Luxury Marina Apartment",
            location: "Dubai Marina",
            price: "AED 2,500,000",
            type: "apartment",
            bedrooms: 3,
            bathrooms: 4,
            area: "2,200 sq ft",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
            badge: "New Launch",
            featured: true
        },
        {
            id: 2,
            title: "Downtown Penthouse",
            location: "Downtown Dubai",
            price: "AED 8,900,000",
            type: "penthouse",
            bedrooms: 4,
            bathrooms: 5,
            area: "4,500 sq ft",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
            badge: "Exclusive",
            featured: true
        },
        {
            id: 3,
            title: "Palm Jumeirah Villa",
            location: "Palm Jumeirah",
            price: "AED 15,000,000",
            type: "villa",
            bedrooms: 6,
            bathrooms: 7,
            area: "8,000 sq ft",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
            badge: "Waterfront",
            featured: true
        },
        {
            id: 4,
            title: "Business Bay Office",
            location: "Business Bay",
            price: "AED 1,800,000",
            type: "commercial",
            bedrooms: 0,
            bathrooms: 2,
            area: "1,500 sq ft",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
            badge: "Investment",
            featured: false
        },
        {
            id: 5,
            title: "JBR Beach Apartment",
            location: "Jumeirah Beach Residence",
            price: "AED 3,200,000",
            type: "apartment",
            bedrooms: 2,
            bathrooms: 3,
            area: "1,800 sq ft",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
            badge: "Sea View",
            featured: false
        },
        {
            id: 6,
            title: "Emirates Hills Villa",
            location: "Emirates Hills",
            price: "AED 25,000,000",
            type: "villa",
            bedrooms: 7,
            bathrooms: 9,
            area: "12,000 sq ft",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
            badge: "Ultra Luxury",
            featured: false
        }
    ];

    let displayedProperties = 3;
    const propertiesGrid = document.getElementById('properties-grid');
    const loadMoreBtn = document.getElementById('load-more-properties');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProperties(properties, limit = null) {
        const propertiesToShow = limit ? properties.slice(0, limit) : properties;
        
        propertiesGrid.innerHTML = propertiesToShow.map(property => `
            <div class="property-card" data-type="${property.type}">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}" loading="lazy">
                    <div class="property-badge">${property.badge}</div>
                    <div class="property-price">${property.price}</div>
                </div>
                <div class="property-content">
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                    <div class="property-features">
                        ${property.bedrooms > 0 ? `
                            <div class="feature">
                                <i class="fas fa-bed"></i>
                                <span>${property.bedrooms} Beds</span>
                            </div>
                        ` : ''}
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Baths</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                    </div>
                    <div class="property-cta">
                        <a href="#contact" class="btn btn-primary btn-small">Contact Me</a>
                        <button class="btn btn-secondary btn-small" onclick="viewPropertyDetails(${property.id})">View Details</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Update load more button visibility
        if (limit && properties.length > limit) {
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Initial render
    renderProperties(propertiesData, displayedProperties);

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const filteredProperties = filter === 'all' 
                ? propertiesData 
                : propertiesData.filter(property => property.type === filter);

            displayedProperties = 3;
            renderProperties(filteredProperties, displayedProperties);
        });
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        const filteredProperties = activeFilter === 'all' 
            ? propertiesData 
            : propertiesData.filter(property => property.type === activeFilter);

        displayedProperties += 3;
        renderProperties(filteredProperties, displayedProperties);
    });
}

// Property details modal (placeholder)
function viewPropertyDetails(propertyId) {
    alert(`Property details for ID: ${propertyId} would open in a modal or new page.`);
}

// Developers data and functionality
function initializeDevelopers() {
    const developersData = [
        {
            name: "Emaar Properties",
            description: "Dubai's premier real estate developer, creator of iconic landmarks including Burj Khalifa and Dubai Mall.",
            projects: "50+ Active Projects",
            logo: "EP"
        },
        {
            name: "DAMAC Properties",
            description: "Luxury real estate developer known for premium residential and commercial developments across Dubai.",
            projects: "40+ Active Projects",
            logo: "DP"
        },
        {
            name: "Dubai Properties",
            description: "Leading developer focusing on master-planned communities and sustainable urban development.",
            projects: "35+ Active Projects",
            logo: "DPG"
        },
        {
            name: "Meraas",
            description: "Innovative developer creating unique lifestyle destinations and mixed-use developments.",
            projects: "25+ Active Projects",
            logo: "MR"
        },
        {
            name: "Nakheel",
            description: "Creator of Palm Jumeirah and other iconic waterfront developments in Dubai.",
            projects: "30+ Active Projects",
            logo: "NK"
        },
        {
            name: "Sobha Realty",
            description: "Premium developer specializing in luxury residential communities and high-end properties.",
            projects: "20+ Active Projects",
            logo: "SR"
        }
    ];

    const developersGrid = document.getElementById('developers-grid');

    developersGrid.innerHTML = developersData.map(developer => `
        <div class="developer-card">
            <div class="developer-logo">
                ${developer.logo}
            </div>
            <h3 class="developer-name">${developer.name}</h3>
            <p class="developer-description">${developer.description}</p>
            <div class="developer-projects">${developer.projects}</div>
            <a href="#contact" class="btn btn-primary btn-small">Get Properties</a>
        </div>
    `).join('');
}

// Testimonials functionality
function initializeTestimonials() {
    const testimonialsData = [
        {
            text: "Vilas helped me find the perfect apartment in Dubai Marina. His knowledge of the market and attention to detail made the entire process smooth and stress-free.",
            author: "Sarah Johnson",
            role: "Property Investor",
            avatar: "SJ"
        },
        {
            text: "Outstanding service! Vilas guided us through every step of purchasing our villa in Palm Jumeirah. Highly professional and knowledgeable about Dubai real estate.",
            author: "Ahmed Al-Rashid",
            role: "Business Owner",
            avatar: "AR"
        },
        {
            text: "I've worked with many real estate agents, but Vilas stands out for his dedication and expertise. He found us an excellent investment property with great ROI potential.",
            author: "Michael Chen",
            role: "International Investor",
            avatar: "MC"
        },
        {
            text: "Vilas made our dream of owning a home in Dubai come true. His patience and understanding of our needs resulted in finding the perfect family home.",
            author: "Priya Sharma",
            role: "Family Buyer",
            avatar: "PS"
        }
    ];

    const testimonialsSlider = document.getElementById('testimonials-slider');

    testimonialsSlider.innerHTML = testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.avatar}</div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message')
        };

        // Validate form
        if (!data.name || !data.email || !data.message || !data.service) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('Thank you for your inquiry! I will contact you within 24 hours.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 350px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add CSS animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content { display: flex; justify-content: space-between; align-items: center; }
            .notification-close { background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px; }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => notification.remove());

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat h3, .stat-card h3');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Counter animation
function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9]/g, '');
    
    if (isNaN(number)) return;

    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
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

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initializeLazyLoading();

// WhatsApp contact functionality
function contactWhatsApp() {
    const phoneNumber = "+971501234567";
    const message = "Hello Vilas, I'm interested in Dubai real estate properties. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Email contact functionality
function contactEmail() {
    const email = "vilas.aade@dubaiproperties.com";
    const subject = "Real Estate Inquiry";
    const body = "Hello Vilas,\n\nI'm interested in learning more about Dubai real estate opportunities.\n\nBest regards,";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Phone contact functionality
function contactPhone() {
    window.location.href = "tel:+971501234567";
}

// Property search functionality (if needed for future enhancement)
function searchProperties(query) {
    // This would connect to a real property database
    console.log('Searching for:', query);
}

// Export functions for global access
window.contactWhatsApp = contactWhatsApp;
window.contactEmail = contactEmail;
window.contactPhone = contactPhone;
window.viewPropertyDetails = viewPropertyDetails;