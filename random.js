// Select Element

const btnEl = document.querySelector("#btn");
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = quoteAuthor;

    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    //console.log(data);
  } catch (error) {
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    //console.log(error);
  }
}

getQuote();

btnEl.addEventListener("click", getQuote);
