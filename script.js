'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'hello world';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value); */

let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = randomNumber;

const callValueOfInput = () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guessNumber) {
      document.querySelector('.message').textContent = 'no number avaliable';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guessNumber === randomNumber) {
      document.querySelector('.message').textContent = 'OH WELL ITS CORRECT!!!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Continue Guessing..';
    }
  }else{
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = 'Game  Over...';
  }
};
const startAgain = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', callValueOfInput);
document.querySelector('.again').addEventListener('click', startAgain);
