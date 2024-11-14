// wait until the dom is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // get all the slider images and store them in a list
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0; // track the currently displayed image

    // get the previous and next buttons
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // function to update the visibility of the images based on the current index
    function updateSlider() {
        // hide all images
        images.forEach((img, index) => {
            img.style.display = 'none'; // hide the image
        });

        // show the current image
        images[currentIndex].style.display = 'block';
    }

    // event listener for the "previous" button
    prevButton.addEventListener('click', function() {
        // move to the previous image
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateSlider(); // update the displayed image
    });

    // event listener for the "next" button
    nextButton.addEventListener('click', function() {
        // move to the next image
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateSlider(); // update the displayed image
    });

    // initialize the slider by displaying the first image
    updateSlider();
});

