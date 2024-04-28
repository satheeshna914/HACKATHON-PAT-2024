// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Save data to localStorage
    var userData = {
        name: name,
        phone: phone,
        email: email
    };
    saveUserData(userData);

    // Reset form fields
    document.getElementById("registrationForm").reset();

    alert("Registration successful!");
});

// Function to save user data to localStorage
function saveUserData(userData) {
    var users = JSON.parse(localStorage.getItem("registeredUsers")) || []; // Get existing users or initialize empty array
    users.push(userData); // Add new user data
    localStorage.setItem("registeredUsers", JSON.stringify(users)); // Save updated data to localStorage
}
