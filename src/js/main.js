import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init() { // Main function to initialize content
    const parkData = await getParkData(); // Obtain park data from API
    const links = getInfoLinks(parkData.images); // Update links for images

    setHeaderFooter(parkData); // Set header & footer using data from park
    setParkIntro(parkData); // Set park title & intro description
    setParkInfoLinks(links); // Creates info cards & links for content below intro
}

function setParkIntro(data) { // Update park name & description; create info cards
    const main_title = document.querySelector(".park-name");
    const main_description = document.querySelector(".park-description");
    main_title.innerHTML = data.fullName;
    main_description.innerHTML = data.description;
    createInfoCards(data.images);
}

function createInfoCards(images) {
    const cardHolder = document.querySelector('.park-info-card-holder');
    cardHolder.innerHTML = '';
    const infoLinks = getInfoLinks(images);
    infoLinks.forEach(info => {
        cardHolder.innerHTML += mediaCardTemplate(info);
    });
}

init();