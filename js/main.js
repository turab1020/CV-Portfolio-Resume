function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    
    if (isActive) {
        element.classList.remove('active');
        const video = element.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    } else {
        element.classList.add('active');
        const video = element.querySelector('video');
        if (video) {
            video.play().catch(() => {});
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    console.log('Portfolio initialized');
});
