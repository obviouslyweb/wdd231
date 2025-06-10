const quote_list = document.querySelector(".quote-list"); // Define the quote list
const no_quotes_remind = document.querySelector(".no-quotes"); // Define the list item saying quotes aren't available
const quote_button = document.querySelector(".quote-button"); // Define the load quotes button

async function getQuotes() { // Obtain the quotes using fetch
    const url = "quotes.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

        quote_list.removeChild(no_quotes_remind);

        const quotes = json.books.find(book => book.title === "Pride and Prejudice").quotes;

        inputQuotes(quotes);
        
        localStorage.setItem("pride-prejudice", JSON.stringify(quotes));

    } catch (error) {
            console.error(error.message);
    }
}

function inputQuotes(quotes) { // Inputs provided quotes as separate bullet points in quote list
    quotes.forEach((element) => {
        const list_item = document.createElement("li");
        list_item.textContent = element;
        quote_list.appendChild(list_item);
    });
    quote_button.classList.add("hidden");
}

function checkQuotes() { // Check to see if quotes already exist in localStorage
    const storedQuotes = localStorage.getItem("pride-prejudice");
    if (storedQuotes) { // If they are, impor and display them
        quote_list.removeChild(no_quotes_remind);
        const quotes = JSON.parse(storedQuotes);
        inputQuotes(quotes);
    }
}

quote_button.addEventListener("click", getQuotes); // Add event listener to button for getting quotes
checkQuotes(); // Runs at start to see localStorage status