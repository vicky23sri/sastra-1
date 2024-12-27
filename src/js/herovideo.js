// Modal functionality
const heroModalContainer = document.getElementById('heroVideoModal');
const heroModalVideo = document.getElementById('heroModalVideo');
const heroVideoButton = document.getElementById('heroVideoBtn');
const heroCloseButton = document.getElementById('heroCloseModal');

// Open modal with fade effect
heroVideoButton.addEventListener('click', () => {
    heroModalContainer.classList.remove('hidden');
    heroModalContainer.classList.add('hero-animate-fade');
    heroModalVideo.play();
    document.body.classList.add('overflow-hidden');
});

// Close modal function
const heroCloseModalHandler = () => {
    heroModalContainer.classList.add('hidden');
    heroModalVideo.pause();
    heroModalVideo.currentTime = 0;
    document.body.classList.remove('overflow-hidden');
};

// Event listeners
heroCloseButton.addEventListener('click', heroCloseModalHandler);

heroModalContainer.addEventListener('click', (e) => {
    if (e.target === heroModalContainer) {
        heroCloseModalHandler();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !heroModalContainer.classList.contains('hidden')) {
        heroCloseModalHandler();
    }
});