const endpoint = "https://type.fit/api/quotes";

// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuoteButton = document.querySelector("#js-new-quote");

// Add an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
newQuoteButton.addEventListener("click", getQuote);

// Write a function declaration to get a random quote from the API endpoint
async function getQuote() {
  try {
    // Use fetch method to get a random quote from the API endpoint
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author;
    // Call the function displayQuote to display the text of the fetched quote
    displayQuote(quote, author);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch quote. Please try again later.");
  }
}

// Write a function declaration called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text
function displayQuote(quote, author) {
  const quoteTextElement = document.querySelector("#js-quote-text");
  quoteTextElement.innerHTML = `"${quote}"<br>-${author}`;
}
