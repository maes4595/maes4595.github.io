const endpoint = "https://type.fit/api/quotes";


const newQuoteButton = document.querySelector("#js-new-quote");


newQuoteButton.addEventListener("click", getQuote);


async function getQuote() {
  try {
  
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author;
   
    displayQuote(quote, author);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch quote. Please try again later.");
  }
}


function displayQuote(quote, author) {
  const quoteTextElement = document.querySelector("#js-quote-text");
  quoteTextElement.innerHTML = `"${quote}"<br>-${author}`;
}

