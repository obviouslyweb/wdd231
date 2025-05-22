import spritePath from "../images/sprite.symbol.svg";

export function mediaCardTemplate(info) {
    return `
      <div class="park-info-card">
        <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}" class="park-info-card-img">
          <h2 class="card-title">${info.name}</h2>
          <p class="card-description">${info.description}</p>
        </a>
      </div>
    `;
}

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `
  <li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center) {
  return `
  <li class="center">
    <h3>${center.name}</h3>
    <p class="center-desc">${center.description}</p>
    <p class="center-directions">${center.directionsInfo}</p>
  </li>`;
}

export function activitiesTemplate(activity) {
  return `
  <li class="activity">
    <p>${activity.name}</p>
  </li>`;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getPhoneNumber(phoneNumbers) {
    const number = phoneNumbers.find((phoneNumbers) => phoneNumbers.type === "Voice");
    return number;
}

export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const number = getPhoneNumber(info.contacts.phoneNumbers);

    return `
      <section class="park-contact">
        <h3 class="contact-title">Contact Info</h3>
          <div class="contact-block">
            <h4 class="contact-subtitle">Mailing Address:</h4>
            <p class="contact-text">${mailing.line1}<br>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
          </div>
          <div class="contact-block">
            <h4 class="contact-subtitle">Phone:</h4>
            <p class="contact-text">${number.phoneNumber}</p>
          </div>
      </section>
    `;
}