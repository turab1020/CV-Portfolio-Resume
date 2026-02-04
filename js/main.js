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
    console.log('Portfolio loaded');
});
