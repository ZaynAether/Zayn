<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day!</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Happy Valentine's Day!</h1>
        <div class="heart"></div>
        <p class="message">You hold the key to my heart!</p>
        <button id="myButton">Click for a Surprise!</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

// Add an event listener to the button for click events
document.getElementById("myButton").addEventListener("click", function() {
    // Get the surprise message div and set its text content
    const surpriseDiv = document.getElementById("surpriseMessage");
    surpriseDiv.textContent = "You're the peanut butter to my jelly! ❤️"; // Surprise message
    surpriseDiv.classList.remove("hidden"); // Show the surprise message

    // Get the surprise image element and display it
    const surpriseImage = document.getElementById("surpriseImage");
    surpriseImage.classList.remove("hidden"); // Show the surprise image
});
