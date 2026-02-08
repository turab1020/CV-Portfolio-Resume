# 📄 Personal CV Portfolio Website

A modern, responsive CV/Portfolio website built with HTML, CSS, and JavaScript featuring a glassmorphism design with animated mesh gradients.

## 👤 Student Information

- **Name:** Turab Haider
- **Roll Number:** 23L-0995
- **Course:** Web Programming
- **Institution:** FAST NUCES, Lahore

## 🔗 Links

- **GitHub:** [github.com/turab1020/CV-Portfolio-Resume](https://github.com/turab1020/CV-Portfolio-Resume)
- **Visit Live:** [Turab Haider | CS Portfolio](https://turab-haider-cv.vercel.app)

## ✨ Features

### Required Sections
- ✅ **Header** - Name, Title, Profile Photo
- ✅ **About Me** - Professional summary
- ✅ **Education** - Academic background
- ✅ **Skills** - Key strengths and tech stack
- ✅ **Experience/Projects** - Work history and project showcase with video previews
- ✅ **Contact Information** - Phone, email, social links
- ✅ **Footer** - Copyright and download resume button

### Bonus Features (+1 Absolute)
- ✅ **Dark/Light Mode** - Toggle between themes with localStorage persistence
- ✅ **Downloadable CV** - PDF resume download button
- ✅ **Animations** - Card hover effects, stagger animations, gradient animations
- ✅ **Contact Form** - Functional contact form with Formspree integration

### Design Highlights
- 🎨 Glassmorphism UI with backdrop blur effects
- 🌈 Animated mesh gradient background
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🎯 Bento grid layout with Flexbox components
- ⚡ Smooth scroll navigation with active state tracking
- 🎬 Project video previews with hover-to-play
- 🔗 Social links (GitHub, LinkedIn, Email)

### Performance Optimizations
- 🚀 **Video Preloading** - Smart lazy loading with `data-src` attributes
- 📦 **Asset Preload Hints** - Critical resources preloaded in HTML head
- 🌐 **Network-Aware Loading** - Adapts to connection speed (4G/3G/2G)
- 💾 **Service Worker Caching** - Instant loading on repeat visits
- ✨ **Loading Shimmer** - Visual feedback while videos load
- 🎯 **GPU Acceleration** - Hardware-accelerated animations

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, CSS Variables, Animations, Media Queries
- **JavaScript** - DOM manipulation, LocalStorage, IntersectionObserver, Service Workers
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **Formspree** - Contact form backend

## 📁 File Structure

```
cv-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles including responsive
├── js/
│   ├── main.js         # JavaScript functionality
│   └── sw.js           # Service worker for caching
├── images/
│   ├── profile.jpg     # Profile photo
│   └── *.mp4           # Project demo videos
└── README.md           # Project documentation
```

## 🚀 Deployment

This project can be deployed on any static hosting platform:
- Vercel
- Netlify
- GitHub Pages

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/turab1020/CV-Portfolio-Resume.git
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 5500
   
   # Using Node.js
   npx serve
   ```

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+
- **Large Tablet:** 900px - 1024px
- **Tablet:** 768px - 900px
- **Mobile:** 480px - 768px
- **Small Mobile:** 320px - 480px
- **Extra Small:** < 320px
- **Landscape Mode:** Optimized for mobile landscape orientation

## 📝 License

© 2026 Turab Haider. All Rights Reserved.

---

*Built with ❤️ for Web Programming Course Assignment*