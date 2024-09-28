let slideIndex = 1; // Start on the first slide (1-based index)

// Display the first slide right when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

// Function to navigate slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Display the correct slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { 
    slideIndex = 1; // Wrap back to the first slide if we exceed the number of slides
  }
  if (n < 1) { 
    slideIndex = slides.length; // Go to the last slide if we navigate back from the first
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide (adjusting for 0-based index)
  slides[slideIndex - 1].style.display = "block";
}
