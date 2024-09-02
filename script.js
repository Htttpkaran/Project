// Simple JavaScript interaction to show an alert when "Learn More" is clicked
function learnMore() {
    alert("Renewable energy is key to a sustainable future. Explore more below!");
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});

let slideIndex = 0;
showSlides();


