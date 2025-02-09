function submitForm(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Get form values and trim whitespaces
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var anyQueries = document.getElementById("anyQueries").value.trim();

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !gender) {
        alert("Please fill out all required fields.");
        return;
    }

    // Simulate form submission by redirecting to a thank-you page
    window.location.href = "thankyou.html";
}
