document.addEventListener('DOMContentLoaded', function() {
    const animatedTextElement = document.querySelector('.animated-text');

    // Define the sequence of words to type (or delete and then type)
    const words = [
        "make games",
        "design products",
        "build solutions",
        "write code"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; // Speed of typing
    let deletingSpeed = 80;  // Speed of deletion (faster than typing)
    let pauseTime = 1500; // Time to pause after typing a word

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // --- Deletion Phase ---
            animatedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            // Check if deletion is complete
            if (charIndex === 0) {
                isDeleting = false;
                // Move to the next word
                wordIndex = (wordIndex + 1) % words.length; 
                typingSpeed = 150; // Reset typing speed
            }
            
        } else {
            // --- Typing Phase ---
            animatedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            // Check if typing is complete
            if (charIndex === currentWord.length) {
                // Done typing the word. Prepare to delete it.
                typingSpeed = pauseTime; // Pause for a moment
                isDeleting = true;
            }
        }

        // Determine the delay before the next character action
        let delay = isDeleting ? deletingSpeed : typingSpeed;
        
        // If we just finished typing, use the long pauseTime delay
        if (!isDeleting && charIndex === currentWord.length) {
            delay = pauseTime;
        }

        setTimeout(type, delay);
    }

    // Start the animation loop
    type();
});
