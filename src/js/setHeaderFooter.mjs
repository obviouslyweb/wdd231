import { footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    // Set disclaimer
    const disclaimer =  document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    // Set page title
    document.title = data.fullName + " (U.S. National Park Service)";

    // Set park image
    const hero_image = document.querySelector(".hero-banner > img");
    hero_image.src = data.images[0].url;

    // Update park name, designation, and states
    const hero_title = document.querySelector(".hero-title");
    const hero_subtitle = document.querySelector(".hero-subtitle");
    hero_title.innerHTML = data.name;
    hero_subtitle.innerHTML = data.designation + "<br>" + data.states;
}

function setFooterInfo(info) {
    const footer = document.querySelector('.park-footer');
    footer.innerHTML = footerTemplate(info);
}

export function setHeaderFooter(info) {
    setHeaderInfo(info);
    setFooterInfo(info);
}