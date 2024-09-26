// Image Array for Slider
const images = ['../img/cover1.jpg', '../img/cover2.jpg', '../img/cover3.jpg'];
let currentIndex = 0;
let sliderInterval;

// Function to Change Images
const changeImage = () => {
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage').src = images[currentIndex];
    currentIndex++;
};

// Start Automatic Slider
sliderInterval = setInterval(changeImage, 3000);

// Left and Right Button Event Listeners
document.getElementById('left').addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop automatic slider
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('sliderImage').src = images[currentIndex];
    sliderInterval = setInterval(changeImage, 3000); // Restart slider
});

document.getElementById('right').addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop automatic slider
    changeImage(); // Move to next image
    sliderInterval = setInterval(changeImage, 3000); // Restart slider
});

// Pause Slider on Hover
document.querySelector('.image-slider').addEventListener('mouseenter', () => {
    clearInterval(sliderInterval); // Stop slider on hover
});

// Resume Slider when Hover is Removed
document.querySelector('.image-slider').addEventListener('mouseleave', () => {
    sliderInterval = setInterval(changeImage, 3000); // Resume slider after hover
});

// Toggle Menu Visibility on Click
const menuToggle = document.getElementById('menu-toggle');
const navbarDefault = document.getElementById('navbar-default');
let menuVisible = false;

menuToggle.addEventListener('click', () => {
    menuVisible = !menuVisible;
    navbarDefault.classList.toggle('hidden-menu', !menuVisible);
});
