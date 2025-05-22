import { getParkData, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init() { // Main function to initialize content
    const parkData = await getParkData(); // Obtain park data from API
    const links = getInfoLinks(parkData.images); // Update links for images

    setHeaderFooter(parkData); // Set header & footer using data from park
    setParkIntro(parkData); // Set park title & intro description, creates info cards & sets links for those
}

init();