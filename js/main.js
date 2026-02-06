/**
 * Handle accordion logic for the Experience and Projects timelines.
 * Toggles the 'active' class and manages video autoplay/pause.
 */
function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    
    if (isActive) {
        element.classList.remove('active');
        
        // Pause the video if the user closes the card
        const video = element.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    } else {
        element.classList.add('active');
        
        // Auto-play the video when the card opens
        const video = element.querySelector('video');
        if (video) {
            video.play().catch(() => {
                // Autoplay might be blocked by the browser, which is fine
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    /* * Theme Management
     * Switches between Dark (default) and Light modes
     */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check if the user has a saved preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Update the icon and save state to localStorage
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    /*
     * Entry Animations
     * Stagger the reveal of bento cards when the page loads
     */
    const cards = document.querySelectorAll('.bento-card');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for each card based on its index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 120);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize hidden state
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    /*
     * Video Playback Logic
     * Videos play on hover, but pause when the mouse leaves
     */
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            video.pause();
            
            item.addEventListener('mouseenter', () => {
                video.play().catch(() => {});
            });
            
            item.addEventListener('mouseleave', () => {
                // Only pause if the card isn't currently open/active
                if (!item.classList.contains('active')) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    });

    /*
     * Scroll Spy Navigation
     * Updates the active pill link based on where the user is on the page
     * Always keeps one section active - no gaps in highlighting
     */
    const sections = document.querySelectorAll('section[id], header[id], footer[id]');
    const navLinks = document.querySelectorAll('.pill-nav-link');
    
    // Map nav links to their corresponding section IDs
    const navSectionMap = {
        'profile': 'Home',
        'about': 'About', 
        'projects': 'Projects',
        'contact': 'Contact'
    };

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const headerOffset = windowHeight * 0.3; // 30% of viewport as trigger point
        
        let activeSection = 'profile'; // Default to first section
        
        // Find the section that's currently most visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // Check if we've scrolled past the start of this section
            // Use a trigger point that's 30% down from the top of the viewport
            if (scrollPosition + headerOffset >= sectionTop) {
                const sectionId = section.getAttribute('id');
                // Only update if this section has a corresponding nav link
                if (navSectionMap[sectionId]) {
                    activeSection = sectionId;
                }
            }
        });

        // Edge case: User is at the very top - always show Home
        if (scrollPosition < 50) {
            activeSection = 'profile';
        }
        
        // Edge case: User is at/near the very bottom - show Contact
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            activeSection = 'contact';
        }

        // Apply active class to the correct link
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    };

    // Use requestAnimationFrame for smooth scroll spy updates
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateActiveNav(); // Run once on load

    /*
     * Hide/Show Navigation on Scroll
     * Shows when scrolling UP or at the top, hides when scrolling DOWN
     */
    const navContainer = document.querySelector('.nav-container');
    let lastScrollY = window.scrollY;
    let isNavHidden = false;
    
    const handleNavVisibility = () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        // Always show nav at the very top of the page
        if (currentScrollY < 60) {
            navContainer.classList.remove('nav-hidden');
            isNavHidden = false;
            lastScrollY = currentScrollY;
            return;
        }
        
        // Scrolling DOWN - hide nav
        if (scrollDelta > 8 && !isNavHidden) {
            navContainer.classList.add('nav-hidden');
            isNavHidden = true;
        }
        
        // Scrolling UP - show nav
        if (scrollDelta < -8 && isNavHidden) {
            navContainer.classList.remove('nav-hidden');
            isNavHidden = false;
        }
        
        lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleNavVisibility, { passive: true });

    console.log("System initialized successfully.");
});