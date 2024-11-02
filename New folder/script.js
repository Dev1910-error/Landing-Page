document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const navLinks = document.querySelectorAll('nav ul li a');
    const ctaButton = document.querySelector('.cta-button');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you, ${name}! Your message has been received.');
            form.reset(); // Clear form
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Scroll smoothly to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Button animation trigger
    ctaButton.addEventListener('mouseover', function () {
        this.classList.add('animate_animated', 'animate_pulse');
    });

    ctaButton.addEventListener('mouseout', function () {
        this.classList.remove('animate_animated', 'animate_pulse');
    });
});