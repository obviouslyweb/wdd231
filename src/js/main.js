import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
}

function setParkIntro(data) {
    // Update park name & description
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