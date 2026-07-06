const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateForm() {
    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Enable/disable submit button
    submit.disabled = !valid;
}

// Real-time validation
name.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);

// Prevent form submission if invalid
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});