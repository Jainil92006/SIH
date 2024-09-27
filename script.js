// JavaScript to dynamically set the current year in the copyright section
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').textContent = `© ${currentYear} Anti-Doping (DopaSafe). All Rights Reserved.`;
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    let currentSlide = 0;

    const nextSlide = () => {
        if (currentSlide < sliderContainer.children.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = sliderContainer.children.length - 1;
        }
        updateSlider();
    };

    const updateSlider = () => {
        const slideWidth = sliderContainer.children[0].offsetWidth;
        sliderContainer.style.transform = `translateX(${-currentSlide * (slideWidth + 30)}px)`;
    };

    // Arrow functionality
    document.querySelector('.slider-container::after').addEventListener('click', nextSlide);
    document.querySelector('.slider-container::before').addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the user's search input
    const searchQuery = document.querySelector('input[name="search"]').value.toLowerCase();
    
    // Object to map search keywords to their corresponding section IDs
    const sectionMap = {
        'home': '',
        'articles': '#articles',
        'news': '#news',
        'events': '#events',
        'support': '#sr',
        'reporting': '#sr',
        'contact us': '#contact',
        'about us': '#about',
        'login': '#login-signup',
        'signup': '#login-signup'
    };
    
    // Check if the search query matches any of the keywords
    for (const [key, sectionId] of Object.entries(sectionMap)) {
        if (searchQuery.includes(key)) {
            // Scroll or navigate to the corresponding section
            window.location.href = sectionId;
            return; // Exit the function once the section is found
        }
    }
    
    // If no match is found, you can alert the user or handle it differently
    alert('No matching section found. Please try a different search term.');
});




let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;
let slideInterval;

// Show the slide based on the index
function showSlides(n) {
    // Adjust slideIndex if out of bounds
    if (n >= totalSlides) { slideIndex = 0; } 
    else if (n < 0) { slideIndex = totalSlides - 1; }

    // Apply the correct transform style
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    updateDots();
}

// Update dot indicators
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// Show the next slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Show the previous slide
function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

// Set the current slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
}

// Set the slider to change slides automatically every 3 seconds
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Stop the automatic slideshow when user interacts with the slider
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for previous and next buttons
document.querySelector('.next').addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

// Initialize the slider
showSlides(slideIndex);
startSlideShow();




document.getElementById('discover-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior

    // Navigate to the desired page
    window.location.href = 'discover.html'; // Replace with the actual URL or page you want to navigate to
});
