import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector('.alerts > ul');
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(visitorcenters) {
    const visitorCenterContainer = document.querySelector(`.visitor > details > ul`);
    visitorCenterContainer.innerHTML = "";
    const html = visitorcenters.map(visitorCenterTemplate); // ADD FUNCTION IN HERE!
    console.log(html);
    visitorCenterContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() { // Main function to initialize content
    const parkData = await getParkData(); // Obtain park data from API
    const alerts = await getParkAlerts();
    const visitorcenters = await getVisitorCenterData();
    setHeaderFooter(parkData); // Set header & footer using data from park
    setAlerts(alerts); // Set park alerts
    setVisitorCenters(visitorcenters); // Set park visitor centers
}

init();

// TO-DO:
// 1. Get the alerts from the API and create a template to display them
// 2. Get informataion from API regarding visitors centers and display a list of them, as well as opening/closing date and current status of operation
// 3. Get list of activities from park and display them