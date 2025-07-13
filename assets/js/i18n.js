// i18n.js - English translations for Gardenia Bloom website
// All text content should be in Arabic by default in HTML, this file provides English translations

const translations = {
    // Navigation
    nav: {
        home: "Home",
        bouquets: "Our Bouquets",
        customOrders: "Custom Orders",
        weddings: "Weddings & Events",
        about: "About Us",
        contact: "Contact"
    },

    // Language toggle
    language: {
        toggleText: "عربي",
        switchToArabic: "Switch to Arabic"
    },

    // Hero section
    hero: {
        title: "Gardenia Bloom",
        subtitle: "Where dreams bloom in the most beautiful bouquets",
        exploreBouquets: "Explore Our Bouquets",
        customOrder: "Custom Order",
        scrollDown: "Scroll Down"
    },

    // Our Bouquets section
    bouquets: {
        title: "Our Signature Bouquets",
        description: "A curated collection of the finest bouquets designed with utmost care",
        bouquet1: {
            title: "Classic Rose Bouquet",
            price: "250 SAR"
        },
        bouquet2: {
            title: "Enchanting Spring Bouquet",
            price: "180 SAR"
        },
        bouquet3: {
            title: "Pink Elegance Bouquet",
            price: "320 SAR"
        },
        bouquet4: {
            title: "Luxury Gardenia Bouquet",
            price: "450 SAR"
        }
    },

    // Custom Orders section
    customOrders: {
        title: "Custom Orders",
        description: "We design your dream bouquet with colors and flowers specially chosen for your special occasion",
        feature1: {
            title: "Unique Design",
            description: "Each bouquet is custom designed for you"
        },
        feature2: {
            title: "Fresh Flowers",
            description: "We select the finest fresh flowers"
        },
        feature3: {
            title: "Elegant Packaging",
            description: "Elegant packaging that matches the beauty of the bouquet"
        },
        orderButton: "Order via WhatsApp"
    },

    // Weddings & Events section
    weddings: {
        title: "Weddings & Events",
        description: "We make your special occasions more beautiful and magnificent with our luxurious floral arrangements",
        wedding: {
            title: "Wedding Arrangements",
            description: "Luxurious floral arrangements for weddings that add beauty and elegance to your special day"
        },
        events: {
            title: "Event Arrangements",
            description: "Distinctive arrangements for special occasions and celebrations that leave an unforgettable impression"
        }
    },

    // About section
    about: {
        title: "About Us",
        description: "At Gardenia Bloom, we believe that flowers are a universal language that expresses feelings and emotions. We strive to provide the finest floral bouquets designed with utmost care to suit all your special occasions. Our team of professional designers selects the finest flowers and designs them in a modern and elegant style.",
        values: {
            quality: {
                title: "Quality",
                description: "We are committed to the highest quality standards in flower selection and bouquet design"
            },
            creativity: {
                title: "Creativity",
                description: "We create unique bouquets that reflect your personality and refined taste"
            },
            service: {
                title: "Service",
                description: "We provide excellent customer service to ensure your complete satisfaction"
            }
        }
    },

    // Contact section
    contact: {
        title: "Contact Us",
        description: "We are here to help you choose the perfect bouquet for your occasion",
        address: {
            title: "Address",
            text: "Riyadh, Saudi Arabia"
        },
        phone: {
            title: "Phone"
        },
        instagram: {
            title: "Instagram"
        },
        hours: {
            title: "Working Hours",
            text: "Saturday - Thursday: 9:00 AM - 10:00 PM"
        },
        followUs: "Follow Us"
    },

    // Footer
    footer: {
        copyright: "© 2024 Gardenia Bloom. All rights reserved."
    },

    // Meta tags
    meta: {
        title: "Gardenia Bloom - Premium Flower Shop",
        description: "Premium flower shop specializing in distinctive bouquets, wedding arrangements, and special occasions in Saudi Arabia",
        keywords: "Florist, Saudi Arabia, Dawadmi, flowers, bouquets, wedding, events, gardenia, roses, premium, gifts, Florist shop, Gift shop, Wedding Shop, Souvenir Shop, Flower delivery, Flower designer, Florist store, Gift store, Wedding store, Souvenir Store",
        ogTitle: "Gardenia Bloom | زهرة القاردينيا",
        ogDescription: "Premium flower shop specializing in distinctive bouquets, wedding arrangements, and special occasions",
        twitterTitle: "Gardenia Bloom | زهرة القاردينيا",
        twitterDescription: "Premium flower shop specializing in distinctive bouquets, wedding arrangements, and special occasions"
    },

    // WhatsApp messages
    whatsapp: {
        defaultMessage: "Hello, I would like to inquire about your available flower bouquets"
    },

    // Notifications
    notifications: {
        messageSent: "Your message has been sent successfully!",
        messageError: "An error occurred while sending your message",
        sending: "Sending..."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
} else {
    window.translations = translations;
} 