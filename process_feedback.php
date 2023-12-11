<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the feedback form data from the POST data
    $userFeedback = $_POST["userFeedback"];

    // Validate and sanitize the input if needed

    // Append the feedback to a text file (you can modify this part)
    $file = 'feedback.txt';
    $currentFeedback = file_get_contents($file);
    $currentFeedback .= date("Y-m-d H:i:s") . "\n" . $userFeedback . "\n\n";
    file_put_contents($file, $currentFeedback, FILE_APPEND | LOCK_EX);

    // Return a response to the client
    echo "Feedback submitted successfully!";
} else {
    // If someone tries to access the script directly
    header("HTTP/1.0 403 Forbidden");
    echo "Access forbidden!";
}
?>
