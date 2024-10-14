document.getElementById("myButton").addEventListener("click", function() {
    const surpriseDiv = document.getElementById("surpriseMessage");
    surpriseDiv.textContent = "You're the peanut butter to my jelly! ❤️"; // Surprise message
    surpriseDiv.classList.remove("hidden"); // Show the surprise message

    const surpriseImage = document.getElementById("surpriseImage");
    surpriseImage.classList.remove("hidden"); // Show the surprise image
});
