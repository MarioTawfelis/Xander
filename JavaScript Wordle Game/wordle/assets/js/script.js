// Grab DOM elements

const message = document.getElementById("success-msg")
const letters = document.getElementsByClassName("wordboard-letter")

async function init() {
    /**
     * Define following variables:
     * - currentGuess
     * - currentRow
     * - ANSWER_LENGTH
     * - done
     */

    let currentGuess = ''
    let currentRow = 0
    const ANSWER_LENGTH = 5
    let done = false

    

    /**
     * Make API call, get word of the day.
     * Create array of characters
     */

    const url = 'https://words.dev-apis.com/word-of-the-day'
    const res = await fetch(url)
    const data = await res.json()
    let wordOfTheDay = data.word.toUpperCase()
    let wordParts = wordOfTheDay.split('')

    function addLetter(letter) {
        // check if buffer is less than 5 characters
            // if so, add letter
            // if not, replace last letter with new letter

        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter
        } else {
            currentGuess = currentGuess.substring(0, currentGuess.length -1) + letter
        }

        letters[currentRow * ANSWER_LENGTH + currentGuess.length -1].textContent = letter
    }

    function handleCommit(){
        // If word doesn't contain 5 letters, do nothing.

        if (currentGuess.length !== ANSWER_LENGTH) return

        // Make map of words
        let guessParts = currentGuess.split('')

        // Mark 'correct', 'close', 'wrong' squares
        for (let i=0; i<ANSWER_LENGTH; i++) {
            if (guessParts[i] === wordParts[i])  {
                letters[currentRow * ANSWER_LENGTH + i].classList.add('correct')
            } else if (wordParts.includes(guessParts[i])) {
                letters[currentRow * ANSWER_LENGTH + i].classList.add('close')
            } else {
                letters[currentRow * ANSWER_LENGTH + i].classList.add('wrong')
            }
        }

        // for (let i=0; i<ANSWER_LENGTH; i++) {
        //     if (guessParts[i] === wordParts[i])  {
        //         //letters[currentRow * ANSWER_LENGTH + i].classList.add('correct')
        //     } else if (wordParts.includes(guessParts[i])) {
        //         letters[currentRow * ANSWER_LENGTH + i].classList.add('close')
        //     } else {
        //         letters[currentRow * ANSWER_LENGTH + i].classList.add('wrong')
        //     }
        // }

        

        // Did the user win or lose?

        // set currentGuess to empty string
        currentGuess = ''

        // increment currentRow
        currentRow++

        

    }

    function handleBackspace() {
        // Modify currentGuess and update DOM
        currentGuess = 
            currentGuess.substring(0, currentGuess.length -1)

        letters[currentRow * ANSWER_LENGTH + currentGuess.length].textContent = ''

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
        
        if (action == "Enter") {
            handleCommit()
        } else if (action == "Backspace") {
            handleBackspace()
        } else if (isLetter(action)) {
           addLetter(action.toUpperCase())
        } else {}
    })
}

function isLetter(action) {
    // Check if keystroke is indeed a letter
    return /^[a-zA-Z]$/.test(action)
}

function makeMap(array) {
    // Create object of characters along with amount of occurrences in word.
}


init()