document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code goes here

    // Add smooth scrolling behavior to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your form submission logic
    var form = event.target;
    var formData = new FormData(form);

    fetch('https://formspree.io/f/mzbnpwpo', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle success, you can redirect or show a success message
        console.log('Form submitted successfully:', data);
        
        // Clear the form fields
        form.reset();
        
        // Optionally, you can redirect the user to a thank-you page or handle it in another way.
        // window.location.href = '/thank-you'; // Example: Redirect to a thank-you page
    })
    .catch(error => {
        // Handle error, you can show an error message
        console.error('Error submitting form:', error);
    });
}

    // Get all the navbar links
    const navLinks = document.querySelectorAll('.nav a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });



