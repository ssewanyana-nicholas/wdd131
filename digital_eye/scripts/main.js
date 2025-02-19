document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    let slideIndex3 = 0;
    showAutoSlides();

    function showAutoSlides() {
        let slides3 = document.getElementsByClassName("mySlides3");
        let dots3 = document.getElementsByClassName("dot3");
        for (let q = 0; q < slides3.length; q++) {
            slides3[q].style.display = "none";
        }
        slideIndex3++;
        if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
        for (let q = 0; q < dots3.length; q++) {
            dots3[q].className = dots3[q].className.replace(" active", "");
        }
        slides3[slideIndex3 - 1].style.display = "grid";
        dots3[slideIndex3 - 1].className += " active";
        setTimeout(showAutoSlides, 5000); // Change image every 5 seconds
    }

    // Form submission handling
    const formElement = document.getElementById('contactForm');
    if (formElement) {
        formElement.addEventListener('submit', function (e) {
            e.preventDefault();
            const userName = formElement.user_name.value;
            const userEmail = formElement.user_email.value;
            const userPhone = formElement.user_phone.value;
            const userSubject = formElement.user_subject.value;
            const userMessage = formElement.user_message.value;

            // Store form data in localStorage
            localStorage.setItem('contactForm', JSON.stringify({ userName, userEmail, userPhone, userSubject, userMessage }));

            // Display feedback message
            const feedbackElement = document.createElement('div');
            feedbackElement.id = 'feedback';
            feedbackElement.innerHTML = `Hello ${userName}! Thank you for your message. We will get back with you as soon as possible!`;
            document.body.appendChild(feedbackElement);
            feedbackElement.style.display = "block";
            document.body.classList.toggle('moveDown');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('msg').value;

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else if (phone && !validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return re.test(String(phone));
    }
});