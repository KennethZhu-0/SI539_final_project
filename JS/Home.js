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
    setInterval(copyImages, 10000); 
});
