document.getElementById('surpriseButton').addEventListener('click', function() {
    // Play the background music
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();

    // Hide the button and show the birthday message
    document.getElementById('birthdayMessage').classList.remove('hidden');
    this.classList.add('hidden');
});

document.getElementById('blowCandleButton').addEventListener('click', function() {
    document.getElementById('cake').classList.add('hidden'); // Hide the cake
    this.classList.add('hidden'); // Hide the blow candle button
    document.getElementById('fireworks').style.backgroundImage = "url('birthday.gif')"; // Change the background image
    startSlideshow(); // Start the slideshow
});

function startSlideshow() {
    const images = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg',
        'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg', 'photo10.jpg'
    ];
    let currentIndex = 0;
    const slideshow = document.getElementById('slideshow');
    const slideImage = slideshow.querySelector('.slide');

    slideshow.classList.remove('hidden');

    function showNextImage() {
        slideImage.src = images[currentIndex];
        slideImage.classList.add('show');
        currentIndex = (currentIndex + 1) % images.length;
    }

    showNextImage();
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}
