quote_list = document.querySelector(".quote-list")
no_quotes_remind = document.querySelector(".no-quotes")
quote_button = document.querySelector(".quote-button");

async function getQuotes() {
    const url = "quotes.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

        quote_list.removeChild(no_quotes_remind);

        quotes = json.books[0].quotes;

        inputQuotes(quotes);
        
        localStorage.setItem("pride-prejudice", JSON.stringify(quotes));

    } catch (error) {
            console.error(error.message);
    }
}

function inputQuotes(quotes) {
    quotes.forEach((element) => {
        list_item = document.createElement("li");
        list_item.textContent = element;
        quote_list.appendChild(list_item);
    });
    quote_button.classList.add("hidden");
}

function checkQuotes() {
    const storedQuotes = localStorage.getItem("pride-prejudice");
    if (storedQuotes) {
        quote_list.removeChild(no_quotes_remind);
        quotes = JSON.parse(storedQuotes);
        inputQuotes(quotes);
    }
}

quote_button.addEventListener("click", getQuotes);
checkQuotes();

// Once checked in, your site should be accessible at https://<your-netlify-name-here>.netlify.app/week7/pride.html

// Style the button so that it uses an animation to “pulse” (grow and shrink) the button.

// Add some style to the page by updating the font, font-size, background colors, button color, padding, margin and text alignment as you see fit.s