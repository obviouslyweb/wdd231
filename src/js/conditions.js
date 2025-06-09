import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate } from "./templates.mjs";
import "../css/styles.css"; // Enabled via Vite
import "../css/partials/conditions.css"; // Enabled via Vite

function setAlerts(alerts) {
    const alertsContainer = document.querySelector('.alerts > ul');
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(visitorcenters) {
    const visitorCenterContainer = document.querySelector(`.visitor > details > ul`);
    visitorCenterContainer.innerHTML = "";
    const html = visitorcenters.map(visitorCenterTemplate);
    visitorCenterContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activityContainer = document.querySelector(".activities > details > ul");
    activityContainer.innerHTML = "";
    const html = activities.map(activitiesTemplate);
    activityContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() { // Main function to initialize content
    const parkData = await getParkData(); // Obtain park data from API
    const alerts = await getParkAlerts();
    const visitorcenters = await getVisitorCenterData();
    setHeaderFooter(parkData); // Set header & footer using data from park
    setAlerts(alerts); // Set park alerts
    setVisitorCenters(visitorcenters); // Set park visitor centers
    setActivities(parkData.activities);
}

init();