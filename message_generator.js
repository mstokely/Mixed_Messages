const prompt = require('prompt-sync')();

const { Console } = require('console');
const messageBank = require('./message_bank');

let userName = prompt("Hello, what is your name?");
let desireToHearJoke = prompt(`Hello ${userName}, would you like to hear a joke?`);

let desiredJoke = prompt('Great! What type of joke would you like to hear?  Your options are puns, dadJokes or oneLiners.');
let jokeType = '';
let jokeGenerator = function(jokeInput){
     if (jokeInput == 'puns'){
        jokeType = 'pun';
        return messageBank[0][Math.floor(Math.random() * 5)]
     };
     if(jokeInput =='dadJokes') {
         jokeType = 'dad joke';
         return messageBank[1][Math.floor(Math.random() * 5)]
     };
     if(jokeInput == 'oneLiners') {
         jokeType = 'one liner';
         return messageBank[2][Math.floor(Math.random() * 5)]
     }
};

 let randomJoke = jokeGenerator(desiredJoke);

console.log(`Awesome. So ${userName}, what do you think of this ${jokeType}:` + randomJoke);
