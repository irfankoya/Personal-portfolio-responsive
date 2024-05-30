document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        let isValid = true;

        // Name validation
        if (name === "") {
            alert("Name is required.");
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            alert("Email address is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Message validation
        if (message === "") {
            alert("Please tell me about the project.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});