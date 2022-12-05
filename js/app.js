'use strict';

console.log('Hey world!');
let score = 0;



let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// question 1

function questionOne() {
  let questionOneGuess = prompt('Do I live in Seattle, WA?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('You got it right!');
  } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('Sorry, you got it wrong');
  }
}

questionOne();

// question 2
function questionTwo() {
  let questionTwoGuess = prompt('Am I bilingual?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('Correct! I speak 3 languages');
  } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert('Sorry, you got it wrong');
  }
}

questionTwo();

// question 3
function questionThree() {
  let questionThreeGuess = prompt('Do I have 2 cat?').toLowerCase();

  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert('You got it right!');
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('Sorry, you got it wrong');
  }
}

questionThree();

// question 4
function questionFour() {
  let questionFourGuess = prompt('Do I like chocolate?').toLowerCase();

  if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert('Correct! I love chocolate!');
  } else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert('Sorry, you got it wrong');
  }
}

questionFour();

// question 5
function questionFive() {
  let questionFiveGuess = prompt('Do I like Pizza?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert('You got it right!'); score++;
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert('Sorry, you got it wrong');
    alert(`Thanks for playing ${userName}!`);
  }
}

questionFive();

// questiton 6
function questionSix() {
  let myNum = '33';

  for (let i = 0; i < 4; i++) {
    let questionSixGuess = prompt('What number am I thinking about?');
    if (questionSixGuess === myNum) {
      alert('Correct! Good job!');
      score++;
      break;
    } else if (questionSixGuess > myNum) {
      alert('Sorry too high!');
    } else if (questionSixGuess < myNum) {
      alert('Sorry too low!');
    }
  }
}

questionSix();

// question 7
function questionSeven() {
  let favHouses = ['amouage', 'creed', 'byredo', 'diptyque', 'hermes', 'tom ford', 'guerlain'];
  let guesses = 6;
  let guessCorrect = false;

  for (let i = 0; i < guesses; i++) {
    let questionSeveneGuess = prompt('What is one of my favorite perfume houses?').toLowerCase();
    for (let j = 0; j < favHouses.length; j++) {
      if (questionSeveneGuess === favHouses[j]) {
        alert('Correct! I love their frangrances!!');
        guessCorrect = true;
        i = 6;
        break;
      }
    }
    if (guessCorrect === false) {
      alert('Incorrect, please try again. You have ' + ( guesses - i - 1) + 'guess left');
    }
  }

}

questionSeven();

alert(`Great Job, ${userName}! Your score is ${score}.`);
