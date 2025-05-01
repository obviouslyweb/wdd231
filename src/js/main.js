import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getInfoLinks();

function setMainInfo(data) {
    // Update park name & description
    const main_title = document.querySelector(".park-name");
    const main_description = document.querySelector(".park-description");
    main_title.innerHTML = parkData.fullName;
    main_description.innerHTML = parkData.description;
}

function createInfoCards() {
    const cardHolder = document.querySelector('.park-info-card-holder');
    cardHolder.innerHTML = '';
    parkInfoLinks.forEach(info =>{
        cardHolder.innerHTML += mediaCardTemplate(info);
    });
}

setMainInfo(parkData);
createInfoCards();
setHeaderFooter(parkData);