// Limit the maximum number of hearts on screen
const maxHearts = 20; // Maximum hearts at any given time
let currentHearts = 0;

// Function to create hearts and animate them
function createHeart() {
    if (currentHearts < maxHearts) { // Check if the max hearts limit is reached
        const heartContainer = document.getElementById("hearts");
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️"; // Heart symbol

        // Random horizontal position and falling speed
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position (viewport width)
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random falling speed (3s to 5s)

        heartContainer.appendChild(heart);
        currentHearts++; // Increase heart count

        // Remove the heart once the animation ends to avoid cluttering the DOM
        heart.addEventListener("animationend", () => {
            heart.remove();
            currentHearts--; // Decrease heart count after removal
        });
    }
}

// Create a new heart every 300ms
setInterval(createHeart, 300);

// Function to check the name input and display message
function displayMessage() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const message = document.getElementById("message");

    if (nameInput !== "") {
        // Show the message with the person's name
        message.textContent = `Hello, ${nameInput}! Will you be my Valentine? 💖`;
        message.style.display = "block"; 
        
        // Hide the input and submit button, show the "Yes" and "No" buttons
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("submitName").style.display = "none";
        document.getElementById("buttons").style.display = "block";
    } else {
        alert("Please enter your name first!");
    }
}

// Function when "Yes" is clicked
function yesClicked() {
    window.location.href = "yes.html"; // Redirect to "Yes" page
}

// Function when "No" is clicked
function noClicked() {
    window.location.href = "no.html"; // Redirect to "No" page
}

// Function when "No" is hovered (Moves button randomly)
function moveButton() {
    const noButton = document.getElementById("no");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
