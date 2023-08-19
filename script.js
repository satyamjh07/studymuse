// Get a reference to the <p> tag with id "dynamic-text"
const dynamicText = document.getElementById('dynamic-text');

// An array of text options to cycle through
const textOptions = [
    "Your inspirational muse for studying and success",
    "Unleash Your Potential",
    "Achieve Academic Excellence",
    "Enhance Your Learning",
    "Stay Organized",
    "Boost Productivity"
];

let currentIndex = 0;
let currentText = textOptions[currentIndex];
let letterIndex = 0;

function typeText() {
    if (letterIndex < currentText.length) {
        dynamicText.textContent = currentText.substring(0, letterIndex + 1);
        letterIndex++;
        setTimeout(typeText, 50); // Adjust the typing speed (50 milliseconds per character)
    } else {
        setTimeout(eraseText, 3000); // Wait for 3 seconds before erasing
    }
}

function eraseText() {
    if (letterIndex >= 0) {
        dynamicText.textContent = currentText.substring(0, letterIndex);
        letterIndex--;
        setTimeout(eraseText, 30); // Adjust the erasing speed (30 milliseconds per character)
    } else {
        currentIndex = (currentIndex + 1) % textOptions.length;
        currentText = textOptions[currentIndex];
        setTimeout(typeText, 0); // Start typing the next text immediately
    }
}

// Call the initial typing function
typeText();
