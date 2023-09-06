//method One using preset quotes

// const quotes = [
//   "The only way to do great work is to love what you do. — Steve Jobs",

//   "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",

//   "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",

//   "The best way to predict the future is to create it. — Peter Drucker",

//   "Don't count the days, make the days count. — Muhammad Ali",

//   "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",

//   "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",

//   "The only thing necessary for the triumph of evil is for good men to do nothing. — Edmund Burke",

//   "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",

//   "Life is really simple, but we insist on making it complicated. — Confucius",
// ];

// const clickBtn = document.querySelector(".btn");
// const insertHere = document.querySelector(".space");
// const heading = document.querySelector(".heading h3");

// function lookForQuote() {

//   const randQuoteIdx = Math.floor(Math.random() * quotes.length);
//   const randItem = quotes[randQuoteIdx];
//   heading.innerHTML = randItem;
// }

// clickBtn.addEventListener("click", lookForQuote);

//Method two using quote API

const clickBtn = document.querySelector(".btn");
const insertHere = document.querySelector("#quote");
const author = document.querySelector("#author");

function generateQuote() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.quotable.io/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);

        insertHere.innerHTML = data.content;
        author.innerHTML = `Author - <strong>${data.author}</strong>`;
      } else {
        insertHere.innerHTML = "Error " + this.status;
        author.innerHTML = "Not found :(";
      }
    }
  };
  xhr.send();
}

//Eventlisteners
clickBtn.addEventListener("click", generateQuote);
document.addEventListener("DOMContentLoaded", generateQuote);
