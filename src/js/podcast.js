const audio = document.getElementById('audioPlayer');
const modal = document.getElementById('podcastModal');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
let currentAudioUrl = '';

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function playPodcast(audioUrl, title) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('downloadLink').href = audioUrl;
    modal.classList.remove('hidden');

    if (currentAudioUrl !== audioUrl) {
        audio.src = audioUrl;
        currentAudioUrl = audioUrl;
    }
    
    audio.play().catch(console.error);
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function closeModal() {
    modal.classList.add('hidden');
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    currentTimeSpan.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});