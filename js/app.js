'use strict';

console.log('Hey world!');


let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// question 1
let questionOneGuess = prompt('Do I live in Seattle, WA?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('You got it right!');
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Sorry, you got it wrong');
}

// question 2
let questionTwoGuess = prompt('Am I bilingual?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert('Correct! I speak 3 languages');
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Sorry, you got it wrong');
}
// question 3
let questionThreeGuess = prompt('Do I have 2 cat?').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('You got it right!');
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('Sorry, you got it wrong');
}

// question 4
let questionFourGuess = prompt('Do I like chocolate?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert('Correct! I love chocolate!');
} else if (questionFourGuess === 'no' || questionFourGuess === 'no') {
  alert('Sorry, you got it wrong');
}

// question 5
let questionFiveGuess = prompt('Do I like Pizza?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('You got it right!');
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Sorry, you got it wrong');
}
alert(`Thanks for playing ${userName}!`);

// question 6

let myNUM = '33';

for (let i = 0; i < 4; i++) {
  let questionSixGuess = prompt('What is my favorite number?');

  if (questionSixGuess === myNUM) {
    alert('Correct! Good job!');
    break;

  } else if (questionSixGuess > myNUM) {
    alert('Sorry too high');
  } else if (questionSixGuess < myNUM) {
    alert('Sorry too low');
  } if (i === 3) {
    alert(`My favoite number is ${myNUM}`);
  }
}

// question 7
let favHouses = ['amouage', 'creed', 'byredo', 'diptyque', 'hermes', 'tom ford', 'guerlain'];

for (let i = 0; i < 6; i++) {
  let questionSeveneGuess = prompt('What is one of my favorite perfume houses?').toLowerCase();

  for (let j = 0; j < favHouses.length; j++) {
    if(questionSeveneGuess === favHouses[j]) {
      alert('Yes! I love their frangrances!!');
      i = 6;
      break;
    }
  }
}

