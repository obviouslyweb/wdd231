import { getParkData } from "./parkService.mjs";
const parkData = getParkData();

// Set disclaimer
const disclaimer =  document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Set page title
document.title = parkData.fullName + " (U.S. National Park Service)";

// Set park image
const hero_image = document.querySelector(".hero-banner > img");
hero_image.src = parkData.images[0].url;

// Update park name, designation, and states
const hero_title = document.querySelector(".hero-title");
const hero_subtitle = document.querySelector(".hero-subtitle");
hero_title.innerHTML = parkData.name;
hero_subtitle.innerHTML = parkData.designation + "<br>" + parkData.states;