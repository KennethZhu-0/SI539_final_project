document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const images = Array.from(slider.querySelectorAll('img'));
    const imageWidths = images.map(img => img.width); 
    const totalWidth = imageWidths.reduce((acc, width) => acc + width, 0);
    const animationDuration = parseFloat(getComputedStyle(slider).animationDuration);
    const scrollTime = animationDuration * (totalWidth / slider.clientWidth);
    
    function copyImages() {
        images.forEach((img, index) => {
            const clone = img.cloneNode(true);
            slider.insertBefore(clone, slider.children[index]); 
        });
    }
    
    copyImages();
    setInterval(copyImages, 5000);
    
    // Adding event listener to the button
    const speedButton = document.getElementById('speedButton');
    let isSlowingDown = false;
    let isPaused = false;

    speedButton.addEventListener('click', function() {
        if (!isSlowingDown) {
            if (!isPaused) {
                slider.style.animationPlayState = 'paused';
                isPaused = true;
                speedButton.textContent = 'Play';
            } else {
                slider.style.animationPlayState = 'running';
                isPaused = false;
                speedButton.textContent = 'Pause';
            }
        } else {
            slider.style.animation = 'scrollLeft 10000s linear infinite';
            isSlowingDown = false;
            speedButton.textContent = 'Pause';
        }
    });
});
