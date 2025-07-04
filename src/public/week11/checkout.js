const checkoutForm = document.getElementById('checkoutForm');
const errorMessagesDiv = document.getElementById('errorMessages');
const errorList = errorMessagesDiv.querySelector('ul');

/**
 * Validates a credit card number using Luhn's algorithm.
 * @param {string} cardNumber - The credit card number string to validate.
 * @returns {boolean} - True if the card number is valid according to Luhn's algorithm, false otherwise.
 */
function isValidLuhn(cardNumber) {
    let sum = 0;
    let isSecondDigit = false;

    // Remove any non-digit characters from the card number
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check typical card number length (13-19 digits)
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }

    // Iterate through the digits from right to left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        // Double every second digit from the right
        if (isSecondDigit) {
            digit *= 2;
            // If doubling results in a number greater than 9, subtract 9
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        // Toggle the flag for the next digit
        isSecondDigit = !isSecondDigit;
    }
    // The number is valid if the sum is a multiple of 10
    return (sum % 10 === 0);
}

function checkDate(submitted_month, submitted_year) {
    const curr = new Date();
    const curr_year = curr.getFullYear();
    const curr_month = curr.getMonth() + 1;

    if (submitted_year < curr_year) {
        return false;
    } else if (submitted_year === curr_year && submitted_month < curr_month) {
        return false;
    }
    return true;
}

// Event listener for form submission
checkoutForm.addEventListener('submit', function (event) {
    let errors = []

    let creditNum = document.querySelector("#cardNumber").value;
    if (!isValidLuhn(creditNum)) {
        errors.push("Please enter a valid credit card number.");
    }

    let expiryMonth = parseInt(document.querySelector("#expMonth").value, 10);
    let expiryYear = parseInt(document.querySelector("#expYear").value, 10);
    
    if (!checkDate(expiryMonth, expiryYear)) {
        errors.push("Expiration date must be equal to or greater than the current date.");
    }
    
    if (errors.length != 0) {
        event.preventDefault();
        errorList.innerHTML = ``;

        errors.forEach(element => {
            let item = document.createElement("li");
            item.innerText = element;
            errorList.appendChild(item);
        });

        errorMessagesDiv.classList.remove('hidden');
    } else {
        errorMessagesDiv.classList.add('hidden');
    }
});
