const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const videoTitle = document.getElementById('videoTitle');
const modalCloseBtn = document.getElementById('modalClose');

function handleVideoPlay(button) {
    const videoUrl = button.dataset.video;
    const title = button.dataset.title;
    
    videoFrame.src = videoUrl;
    videoTitle.textContent = title;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function handleModalClose() {
    videoModal.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => handleVideoPlay(button));
});

modalCloseBtn.addEventListener('click', handleModalClose);

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) handleModalClose();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        handleModalClose();
    }
});