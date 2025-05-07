let audio = document.getElementById('themeSong');
audio.volume = 0.01;

//Guessing Game
const characters = [
    'Reimu Hakurei',
    'Marisa Kirisame'
]
/*'Rumia',
    'Daiyousei',
    'Cirno',
    'Hong Meiling',
    'Koakuma',
    'Patchouli Knowledge',
    'Sakuya Izayoi',
    'Remilia Scarlet',
    'Flandre Scarlet',
    'Letty Whiterock',
    'Chen',
    'Alice Margatroid',
    'Lily White',
    'Lunasa Prismriver',
    'Merlin Prismriver',
    'Lyrica Prismriver',
    'Youmu Konpaku',
    'Yuyuko Saigyouji',
    'Ran Yakumo',
    'Yukari Yakumo',
    'Suika Ibuki',
    'Wriggle Nightbug',
    'Mystia Lorelei',
    'Keine Kamishirasawa',
    'Tewi Inaba',
    'Reisen Udongein Inaba',
    'Eirin Yagokoro',
    'Kaguya Houraisan',
    'Fujiwara no Mokou',
    'Aya Shameimaru',
    'Medicine Melancholy',
    'Yuuka Kazami',
    'Komachi Onozuka',
    'Shiki Eiki',
    'Shizuha Aki',
    'Minoriko Aki',
    'Hina Kagiyama',
    'Nitori Kawashiro',
    'Momiji Inubashiri',
    'Sanae Kochiya',
    'Kanako Yasaka',
    'Suwako Moriya',
    'Iku Nagae',
    'Tenshi Hinanawi',
    'Kisume',
    'Yamame Kurodani',
    'Parsee Mizuhashi',
    'Yuugi Hoshiguma',
    'Satori Komeiji',
    'Orin Kaenbyou',
    'Utsuho Reiuji',
    'Koishi Komeiji',
    'Nazrin',
    'Kogasa Tatara',
    'Ichirin Kumoi',
    'Minamitsu Murasa',
    'Shou Toramaru',
    'Byakuren Hijiri',
    'Nue Houjuu',
    'Hatate Himekaidou',
    'Kyokou Kasodani',
    'Yoshika Miyako',
    'Seiga Kaku',
    'Soga no Tojiko',
    'Mononobe no Futo',
    'Toyosatomimi no Miko',
    'Mamizou Futatsuiwa',
    'Hata no Kokoro',
    'Wakasagihime',
    'Sekibanki',
    'Kagerou Imaizumi',
    'Benben Tsukumo',
    'Yatsuhashi Tsukumo',
    'Seija Kijin',
    'Shinmyoumaru Sukuna',
    'Raiko Horikawa',
    'Sumireko Usami',
    'Seiran',
    'Ringo',
    'Doremy Sweet',
    'Sagume Kishin',
    'Clownpiece',
    'Junko',
    'Hecatia Lapislazuli',
    'Joon Yorigami',
    'Shion Yorigami'*/
//Note to self, add more characters later

const guessedCharacters = []

//setting Game Variables
let selectedCharacter = ''
let displayedCharacter = ''
let wrongGuesses = 0
const maxMistakes = 6

function startGame(begin) {
    
    selectedCharacter = getRandomCharacter(begin)

    //Update Difficulty Display Div
    updateDifficultyDisplay(begin)

    //Create the placeholder for the selected Character
    displayedCharacter = '_'.repeat(selectedCharacter.length)
    //display the updated Character
    document.getElementById('character').src = `imgs/portraits/L1/${selectedCharacter}.png`

    //Hide Difficulty Selection and Show Game Area & Difficulty Box
    //Add d-none to difficultySelection div
    document.getElementById('start').classList.add('d-none')
    //Remove d-none from game & gameArea
    document.getElementById('game').classList.remove('d-none')
    //Add d-block to game & gameArea
    document.getElementById('game').classList.add('d-block')
}

function getRandomCharacter(characters) {
    //Select and return random Character from the filtered list
    return indexOf(characters[Math.floor(Math.random())]).push
}

function updateDifficultyDisplay(begin) {
    //document.getElementById('game').textContent =
    let game = document.getElementById('game')
    //Remove any present difficulty classes
    game.classList.remove('easy', 'medium', 'hard')
    //Set text & apply class dynamically using template literals
    game.textContent = `Difficulty: ${begin.charAt(0).toUpperCase() + begin.slice(1)}`
    //Apply the appropriate css style for chosen difficulty
    game.classList.add(begin)
}

function guessLetter() {
    let inputField = document.getElementById('letterInput') //get input field
    let guessedCharacters = inputField.value.toLowerCase() //convert input to lowercase

    //check if input is a valid letter (a-z)
    if (!guessedCharacters.match(/^[a-z]$/)) {
        alert(`Please enter a valid letter between A-Z!`)
        inputField.value = '' //clear input field
        inputField.innerText = '' //clear input field
        return //exit
    }

    //check if letter was already guessed using .include()
    if (guessedCharacters.includes(guessedCharacters)) {
        alert(`You've already guessed this letter!`)
        inputField.value = '' //clear input field
        inputField.innerText = '' //clear input field
        return //exit
    } else {
        //store guessed letter in guessedCharacters array
        guessedCharacters.push(guessedCharacters)
    }

    if (selectedCharacter.includes(guessedCharacters)) {
        correctGuess(guessedCharacters)
    } else {
        wrongGuess(guessedCharacters)
    }

    inputField.value = '' //clear input field
    inputField.innerText = '' //clear input field
    inputField.focus() //refocus input field for next guess
}


document.getElementById('letterInput').addEventListener("keydown", (event) => {
    let guessedCharacters = document.getElementById('letterInput').value.toLowerCase() //convert input to lowercase

    if (event.key === "Enter") {
        //check if input is a valid letter (a-z)
        if (!guessedCharacters.match(/^[a-z]$/)) {
            alert(`Please enter a valid letter between A-Z!`)
            document.getElementById('letterInput').value = '' //clear input field
            document.getElementById('letterInput').innerText = '' //clear input field
            return //exit
        }
        //store guessed letter in guessedCharacters array
        guessedCharacter.push(guessedCharacters)

        if (selectedCharacter.includes(guessedCharacters)) {
            correctGuess(guessedCharacters)
        } else {
            wrongGuess(guessedCharacters)
        }

        document.getElementById('letterInput').value = '' //clear input field
        document.getElementById('letterInput').innerText = '' //clear input field
        document.getElementById('letterInput').focus() //refocus input field for next guess
    }
})

function wrongGuess(guessedCharacters) {
    //increment # of wrong guesses
    wrongGuesses++

    document.getElementById('guesses').textContent = '${5 - wrongGuesses} more guesses!'

    const maxMistakes = 5
    //change back to see ig % of wrong guesses is - max mistakes
    if (wrongGuesses === maxMistakes) {
        endGame(false)
    }
}

function correctGuess(guessedCharacters) {
    let newDisplayedCharacter = ''

    for (let i = 0; i < selectedCharacter.length; i++) {
        if (selectedCharacter[i] === guessedCharacters) {
            newDisplayedCharacter += guessedCharacters
        } else {
            newDisplayedCharacter += displayedCharacter[i]
        }
    }
    displayedCharacter = newDisplayedCharacter

    document.getElementById('characterDisplay').textContent = displayedCharacter.split('').join(' ')
}

function endGame(won) {
    document.getElementById('result').classList.remove('win', 'lost')
    document.getElementById('letterInput').disabled = true

    if (won === true) {
        document.getElementById('result').classList.remove('d-none')
        document.getElementById('result').textContent = `Congratulations, you guessed the Character correctly!`
        document.getElementById('result').classList.add('win')
    } else if (won === false) {
        document.getElementById('result').classList.remove('d-none')
        document.getElementById('result').innerHTML = `Try again next time, the Character was <b>${selectedCharacter}</b>!`
        document.getElementById('result').classList.add('lost')
    }

}

function pointCount(won){
    if (won === true) {
        pointAmount++
        return document.getElementById('points').innerHTML = `<p>So far you have won <b>${pointAmount}</b> times!</p>`
    } else {
        return document.getElementById('points').innerHTML = `<p>So far you have won <b>${pointAmount}</b> times!</p>`
    }

}

function removeCharacter(){
    guessedCharacters.push(selectedCharacter)
    CharacterList.with([selectedCharacter], '')
    document.getElementById('grave').textContent = `${guessedCharacters}`
}

function restartGame() {
    //Hide Difficulty Selection and Show Game Area & Difficulty Box
    //Add d-none to difficultySelection div
    document.getElementById('difficultySelection').classList.remove('d-none')
    //Remove d-none from game & gameArea
    document.getElementById('game').classList.add('d-none')
    document.getElementById('gameArea').classList.add('d-none')
    document.getElementById('gameArea2').classList.add('d-none')
    //Add d-block to game & gameArea
    document.getElementById('game').classList.remove('d-block')
    document.getElementById('gameArea').classList.remove('d-block')
    document.getElementById('gameArea2').classList.remove('d-block')
    document.getElementById('guessing').classList.remove('d-none')

    document.getElementById('result').classList.remove('win', 'lost')
    document.getElementById('result').classList.add('d-none')
    document.getElementById('letterInput').disabled = false

    document.getElementById('wrongLetters').textContent = `Wrong Guesses: `
    document.getElementById('shamrock').src = 'imgs/shamrock6.png'

    document.getElementById('letterInput').value = ''
    document.getElementById('letterInput').innerText = ''

    wrongGuesses = 0
    guessedCharacters = ['']
}