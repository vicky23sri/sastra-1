const spiritualVideoModal = document.getElementById("spiritualVideoModal");
const spiritualVideoFrame = document.getElementById("spiritualVideoFrame");
const spiritualCloseBtn = document.getElementById("spiritualCloseBtn");
const spiritualPlayButtons = document.querySelectorAll(
    ".spiritual-play-button"
);

// Video Modal Controller
const VideoModalController = {
    open(videoUrl) {
        spiritualVideoFrame.src = videoUrl;
        spiritualVideoModal.classList.remove("hidden");
        spiritualVideoModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    },

    close() {
        spiritualVideoFrame.src = "";
        spiritualVideoModal.classList.add("hidden");
        spiritualVideoModal.classList.remove("flex");
        document.body.style.overflow = "auto";
    },
};

// Event Listeners
spiritualPlayButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const videoUrl = button.getAttribute("data-video");
        VideoModalController.open(videoUrl);
    });
});

spiritualCloseBtn.addEventListener("click", () => {
    VideoModalController.close();
});

spiritualVideoModal.addEventListener("click", (e) => {
    if (e.target === spiritualVideoModal) {
        VideoModalController.close();
    }
});

// Keyboard Event Listener for Accessibility
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !spiritualVideoModal.classList.contains("hidden")) {
        VideoModalController.close();
    }
});
