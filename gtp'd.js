//This is the chatgpt generated base code for the new guessing game attempt, i'll be ripping pieces from it as i see fit, this file is temporary
const characters = [
    'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Frodo Baggins', 'Gandalf the Grey',
    'Luke Skywalker', 'Darth Vader', 'Sherlock Holmes', 'Dr. Watson', 'Jon Snow'
  ];

  let currentCharacter = '';
  let attempts = 0;
  const maxAttempts = 5;

  function startGame() {
    currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    attempts = 0;
    document.getElementById('hint').textContent = 'Hint: The character is from a popular fantasy or sci-fi series.';
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
  }

  function checkGuess() {
    const userGuess = document.getElementById('guess').value.trim();
    if (!userGuess) {
      alert('Please enter a guess!');
      return;
    }

    attempts++;
    if (userGuess.toLowerCase() === currentCharacter.toLowerCase()) {
      document.getElementById('result').textContent = `Correct! The character was "${currentCharacter}".`;
      document.getElementById('result').style.color = 'green';
      setTimeout(startGame, 2000);
    } else {
      if (attempts < maxAttempts) {
        document.getElementById('result').textContent = `Wrong guess. You have ${maxAttempts - attempts} attempts left.`;
        document.getElementById('result').style.color = 'red';
      } else {
        document.getElementById('result').textContent = `Game over! The correct character was "${currentCharacter}".`;
        document.getElementById('result').style.color = 'red';
        setTimeout(startGame, 2000);
      }
    }
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
  }

  startGame();