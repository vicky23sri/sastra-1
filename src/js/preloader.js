document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const loadingText = document.getElementById('loading-text');
    const progressCircle = document.getElementById('progress-circle');
    
    const circumference = 2 * Math.PI * 46;
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 2;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                preloader.classList.add('hide-preloader');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
        
        // Update progress circle
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        
        // Update loading text with smooth number
        loadingText.textContent = `Loading... ${Math.round(progress)}%`;
    }, 50);
});