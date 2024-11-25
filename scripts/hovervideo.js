document.querySelectorAll('.hoverVideoContainer').forEach(container => {
    const video = container.querySelector('.hover-video');

    container.addEventListener('mouseenter', () => {
        video.play();  // Play the video when hovering
    });

    container.addEventListener('mouseleave', () => {
        video.pause();  // Pause the video when mouse leaves
        video.currentTime = 0; // Reset the video to start from the beginning
    });
});