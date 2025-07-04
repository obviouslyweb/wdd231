window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('firstName');
  const lastName = urlParams.get('lastName');

  let thankYouMessage = `Thank you`;

  if (firstName) {
    thankYouMessage += `, ${firstName}`;
  }
  if (lastName) {
    thankYouMessage += ` ${lastName}`;
  }

  thankYouMessage += `!`;

  let thankYouContainer = document.getElementById("thankYouMessage");
  thankYouContainer.innerText = thankYouMessage;
});
