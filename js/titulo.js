const textArray = ["Química Quântica", "Cálculos Computacionais", "Ciência!"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
const typingSpeed = 100; // Ajustar para uma velocidade mais natural
const eraseSpeed = 50; // Velocidade de apagar

function type() {
    if (charIndex < textArray[textIndex].length) {
        currentText += textArray[textIndex].charAt(charIndex);
        document.getElementById("animated-text").textContent = currentText;
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 2000); // Pausa antes de apagar
    }
}

function erase() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, --charIndex);
        document.getElementById("animated-text").textContent = currentText;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, typingSpeed);
});
