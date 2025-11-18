const animatedTextSpan = document.querySelector('.animated-text');
const phrases = [
    "make games",
    "do coding",
    "am in class 6"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseBeforeDelete = 1500;
const pauseBeforeType = 500;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        animatedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        animatedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, pauseBeforeType);
    } else {
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the animation immediately
typeEffect();


