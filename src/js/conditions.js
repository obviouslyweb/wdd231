import { getParkData, getParkAlerts } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate } from "./templates.mjs";

async function init() { // Main function to initialize content
    const parkData = await getParkData(); // Obtain park data from API
    const alerts = await getParkAlerts();
    setHeaderFooter(parkData); // Set header & footer using data from park
    setAlerts(alerts);
}

function setAlerts(alerts) {
    const alertsContainer = document.querySelector('.alerts > ul');
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    console.log(html);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

init();

// TO-DO:
// 1. Get the alerts from the API and create a template to display them
// 2. Get informataion from API regarding visitors centers and display a list of them, as well as opening/closing date and current status of operation
// 3. Get list of activities from park and display them