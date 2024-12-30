// Get elements with new IDs
const krishnaAudio = document.getElementById('krishnaSloganAudio');
const krishnaAudioControl = document.getElementById('krishnaAudioControl');
const krishnaMobileAudioControl = document.getElementById('krishnaMobileAudioControl');
const krishnaPlayIcon = document.getElementById('krishnaPlayIcon');
const krishnaPauseIcon = document.getElementById('krishnaPauseIcon');
const krishnaMobilePlayIcon = document.getElementById('krishnaMobilePlayIcon');
const krishnaMobilePauseIcon = document.getElementById('krishnaMobilePauseIcon');

// Audio context for better control
let krishnaAudioContext = null;

// Initialize audio context on user interaction
function initKrishnaAudioContext() {
  if (!krishnaAudioContext) {
    krishnaAudioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Function to update UI
function updateKrishnaUI(isPlaying) {
    const buttons = [krishnaAudioControl, krishnaMobileAudioControl];
    buttons.forEach(button => button?.classList.toggle('loading', false));
    
    if (isPlaying) {
        krishnaPlayIcon.classList.add('hidden');
        krishnaPauseIcon.classList.remove('hidden');
        krishnaMobilePlayIcon.classList.add('hidden');
        krishnaMobilePauseIcon.classList.remove('hidden');
    } else {
        krishnaPlayIcon.classList.remove('hidden');
        krishnaPauseIcon.classList.add('hidden');
        krishnaMobilePlayIcon.classList.remove('hidden');
        krishnaMobilePauseIcon.classList.add('hidden');
    }
}

// Function to play audio
async function playKrishnaAudio() {
    try {
        initKrishnaAudioContext();
        const buttons = [krishnaAudioControl, krishnaMobileAudioControl];
        buttons.forEach(button => button?.classList.toggle('loading', true));
        
        await krishnaAudio.play();
        updateKrishnaUI(true);
    } catch (err) {
        console.log('Audio playback failed:', err);
        updateKrishnaUI(false);
        buttons.forEach(button => button?.classList.toggle('loading', false));
    }
}

// Function to pause audio
function pauseKrishnaAudio() {
    krishnaAudio.pause();
    updateKrishnaUI(false);
}

// Function to toggle audio
function toggleKrishnaAudio() {
    if (krishnaAudio.paused) {
        playKrishnaAudio();
    } else {
        pauseKrishnaAudio();
    }
}

// Event listeners
krishnaAudioControl.addEventListener('click', toggleKrishnaAudio);
krishnaMobileAudioControl.addEventListener('click', toggleKrishnaAudio);

// Reset when audio ends
krishnaAudio.addEventListener('ended', () => {
    updateKrishnaUI(false);
});

// Handle audio loading errors
krishnaAudio.addEventListener('error', (e) => {
    console.error('Audio loading error:', e);
    updateKrishnaUI(false);
    const buttons = [krishnaAudioControl, krishnaMobileAudioControl];
    buttons.forEach(button => button?.classList.toggle('loading', false));
});

// Update UI based on audio state changes
krishnaAudio.addEventListener('playing', () => updateKrishnaUI(true));
krishnaAudio.addEventListener('pause', () => updateKrishnaUI(false));