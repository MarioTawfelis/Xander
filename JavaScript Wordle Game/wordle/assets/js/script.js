// Grab DOM elements

const message = document.getElementById("success-msg")
const letters = document.getElementsByClassName("wordboard-letter")

async function init() {
    /**
     * Define following variables:
     * - currentGuess
     * - currentRow
     * - answerLength
     * - done
     */

    

    /**
     * Make API call, get word of the day.
     * Create array of characters
     */


    function addLetter(letter) {
        // check if buffer is less than 5 characters
            // if so, add letter
            // if not, replace last letter with new letter

    }

    function handleCommit(){
        // If word doesn't contain 5 letters...

        // Mark 'correct', 'close', 'wrong' squares

        // Did the user win or lose?

        // set currentGuess to empty string
        // increment currentRow
    }

    function handleBackspace() {
        // Modify currentGuess and update DOM
    }


    /**
     * Listen for keystrokes and perform actions based on the following:
     * 
     * - is the key Enter
     * - is the key Backspace
     * - is the key a valid letter
     * - otherwise...
     */

    document.addEventListener("keydown", function(event) {
        const action = event.key
        console.log(action)
    })
}

function isLetter(action) {
    // Check if keystroke is indeed a letter
}

function makeMap(array) {
    // Create object of characters along with amount of occurrences in word.
}


init()