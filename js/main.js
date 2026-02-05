// --- ACCORDION TOGGLE FUNCTION (Global) ---
function toggleAccordion(element) {
    // Check if already active
    const isActive = element.classList.contains('active');
    
    // Close all other accordions (optional - remove if you want multiple open)
    // document.querySelectorAll('.timeline-item.active').forEach(item => {
    //     item.classList.remove('active');
    // });
    
    // Toggle current item
    if (isActive) {
        element.classList.remove('active');
        // Pause video when closing
        const video = element.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    } else {
        element.classList.add('active');
        // Play video when opening
        const video = element.querySelector('video');
        if (video) {
            video.play().catch(() => {});
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // --- DARK/LIGHT MODE TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Toggle Icon and Save Preference
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- CARD STAGGER ANIMATION ---
    const cards = document.querySelectorAll('.bento-card');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 120); // 120ms delay for nice stagger
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Initial state before animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    // --- VIDEO PLAYBACK ON HOVER ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            // Pause video initially
            video.pause();
            
            // Play video when timeline item is hovered or active
            item.addEventListener('mouseenter', () => {
                video.play().catch(() => {
                    // Handle autoplay restriction silently
                });
            });
            
            item.addEventListener('mouseleave', () => {
                // Only pause if the item is not in active/clicked state
                if (!item.classList.contains('active')) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    });

    // --- PILL NAVIGATION ACTIVE STATE ON SCROLL ---
    const sections = document.querySelectorAll('section[id], header[id], footer[id]');
    const navLinks = document.querySelectorAll('.pill-nav-link');

    const updateActiveNav = () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 150; // Offset for fixed nav
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // If we're at the very top, set Home as active
        if (window.scrollY < 100) {
            currentSection = 'profile';
        }
        
        // If we're at the bottom of the page, set Download as active
        if (window.scrollY + windowHeight >= documentHeight - 50) {
            currentSection = 'download';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial check
    updateActiveNav();
    
    console.log("%c Mesh Gradient System Active ", "background: #222; color: #bada55; font-weight: bold;");
});