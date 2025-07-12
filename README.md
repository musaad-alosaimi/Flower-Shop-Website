# زهرة القاردينيا | Gardenia Bloom

A visually stunning, modern website for a premium flower shop featuring elegant design, smooth animations, and bilingual support (Arabic/English).

## 🌸 Features

### Design & Aesthetics
- **Elegant Color Palette**: Soft whites, beige, pastel pinks, and sage greens
- **Premium Typography**: Playfair Display serif headers with Tajawal/Inter for body text
- **High-Quality Imagery**: Beautiful floral photography with responsive design
- **Boutique-Style Feel**: Luxury aesthetic matching premium flower shop branding

### Interactive Elements
- **Smooth Scroll Animations**: Fade-ins, parallax effects, and text reveals
- **Hover Animations**: Interactive bouquet cards and buttons
- **Mobile-Optimized**: Touch-friendly interface with responsive navigation
- **Loading Animations**: Staggered entrance animations for enhanced UX

### Functionality
- **URL-based i18n**: Arabic (RTL) at `/` and English (LTR) at `/en` with proper SEO
- **WhatsApp Integration**: Direct contact buttons for mobile ordering
- **Responsive Navigation**: Mobile hamburger menu with smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure for both languages

### Sections
1. **Hero Section**: Full-screen introduction with call-to-action buttons
2. **Our Bouquets**: Gallery-style showcase with pricing and descriptions
3. **Custom Orders**: Feature highlights with WhatsApp integration
4. **Weddings & Events**: Photo-rich section for special occasions
5. **About Us**: Company story and values
6. **Contact**: Contact information and social media links

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure all files are in the correct structure:
```
website/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── favicon.ico
└── README.md
```

### Running the Website

#### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

#### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have it installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 🎨 Customization

### Colors
Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-color: #d4a574;
    --secondary-color: #f7f3f0;
    --accent-color: #e8b4cb;
    /* ... other colors */
}
```

### Content
- Update text content in `index.html`
- Replace images with your own (maintain aspect ratios)
- Modify WhatsApp number in `assets/js/script.js`

### Internationalization (i18n)
The website uses URL-based language switching with proper SEO support:

**URL Structure:**
- Arabic (default): `/` or `/ar`
- English: `/en`

**How it works:**
1. **Default Content**: HTML contains Arabic text with `data-translate` attributes
2. **English Translations**: Stored in `assets/js/i18n.js` file
3. **Language Detection**: JavaScript detects URL path and applies translations
4. **SEO-Friendly**: Each language has its own URL for proper indexing

**Adding New Languages:**
1. Create translation file (e.g., `i18n-es.js` for Spanish)
2. Add language detection logic in `script.js`
3. Update navigation links and URL routing
4. Add corresponding CSS for text direction if needed

## 📞 WhatsApp Integration

Update the phone number in `assets/js/script.js`:
```javascript
const phoneNumber = '+966501234567'; // Replace with your number
```

The system automatically sends a predefined message in the selected language.

## 🔧 Configuration

### Google Fonts
The website uses these fonts (loaded from Google Fonts):
- **Tajawal**: Arabic and English body text
- **Playfair Display**: Headers and titles
- **Inter**: Fallback for English text

### Image Sources
Images are currently loaded from Unsplash. For production:
1. Download and optimize images
2. Place in `assets/images/`
3. Update image paths in HTML

## 📊 Performance Features

- **Intersection Observer**: Efficient scroll animations
- **Lazy Loading**: Images load as they enter viewport
- **Debounced Scrolling**: Optimized scroll event handling
- **CSS Animations**: Hardware-accelerated transitions
- **Mobile-First**: Responsive design approach

## 🌐 SEO Features

- Semantic HTML5 structure
- Open Graph meta tags
- Arabic and English meta descriptions
- Proper heading hierarchy
- Alt tags for all images
- Structured data ready

## 🎯 Accessibility

- Keyboard navigation support
- Focus indicators
- Alt text for images
- Proper heading structure
- Color contrast compliance
- Screen reader friendly

## 📝 Development Notes

### File Structure
- `index.html`: Main HTML structure with Arabic content
- `assets/css/styles.css`: All styling and animations
- `assets/js/script.js`: Interactive functionality and i18n system
- `assets/js/i18n.js`: English translations for internationalization
- `assets/images/`: Image assets and favicon

### Key Technologies
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Custom Properties
- **Vanilla JavaScript**: ES6+, Intersection Observer, Local Storage
- **Google Fonts**: Typography
- **Unsplash**: High-quality imagery

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Drag and drop the `website` folder to Netlify
2. Or connect your GitHub repository

### Custom Server
Upload all files to your web hosting provider's public directory.


## 📄 License

This project is created for Gardenia Bloom flower shop. All rights reserved.
