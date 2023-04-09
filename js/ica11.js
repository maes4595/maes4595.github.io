const endpoint = "https://type.fit/api/quotes";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
const newQuoteButton = document.querySelector("#js-new-quote");
const tweetButton = document.querySelector("#js-tweet");
const quoteTextElement = document.querySelector("#js-quote-text");
const dogImageElement = document.querySelector("#js-dog-image");

newQuoteButton.addEventListener("click", getQuote);
tweetButton.addEventListener("click", tweetQuote);

async function getQuote() {
  try {
    const quoteResponse = await fetch(endpoint);
    const dogResponse = await fetch(dogApiUrl);

    if (!quoteResponse.ok || !dogResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const quoteData = await quoteResponse.json();
    const randomQuoteIndex = Math.floor(Math.random() * quoteData.length);
    const quote = quoteData[randomQuoteIndex].text;
    const author = quoteData[randomQuoteIndex].author || "Unknown";

    const dogData = await dogResponse.json();
    const dogImageUrl = dogData.message;

    displayQuote(quote, author);
    displayDogImage(dogImageUrl);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch data. Please try again later.");
  }
}

function displayQuote(quote, author) {
  quoteTextElement.innerHTML = `"${quote}"<br>- ${author}`;
}

function displayDogImage(imageUrl) {
  dogImageElement.setAttribute("src", imageUrl);
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTextElement.textContent}`;
  window.open(twitterUrl, "_blank");
}
