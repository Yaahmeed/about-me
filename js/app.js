'use strict';

console.log('Hey world!');

// TODO: GET USERS NAME - prompt

let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// TODO: prompt them with 5 yes or no(y/n) question, alert if they got the answer right or wrong

let questionOneGuess = prompt('Did I go to college?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
} else if (questionOneGuess === 'no' || questionOneGuess === 'np'){
  alert('Sorry, you got it wrong');
}


// TODO: Give a personalized message at the end
