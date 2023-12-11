<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the contact form data from the POST data
    $userName = $_POST["userName"];
    $userEmail = $_POST["userEmail"];
    $userEvent = $_POST["userEvent"];
    $userMessage = $_POST["userMessage"];
    $userDate = $_POST["userDate"];

    // Validate and sanitize the input if needed

    // Process the data as needed (e.g., send email, save to database, etc.)

    // Return a response to the client
    echo "Contact form submitted successfully!";
} else {
    // If someone tries to access the script directly
    header("HTTP/1.0 403 Forbidden");
    echo "Access forbidden!";
}
?>
