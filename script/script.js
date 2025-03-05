const texts = ["Website Designer", "Website Developer", "Graphics Designer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const deleteSpeed = 50; // Speed of deleting
const changeDelay = 1000; // Delay before changing text
const element = document.getElementById("typingEffect");

function typeText() {
    if (charIndex < texts[index].length) {
        element.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, changeDelay);
    }
}

function deleteText() {
    if (charIndex > 0) {
        element.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deleteSpeed);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, typingSpeed);
    }
}

typeText();
