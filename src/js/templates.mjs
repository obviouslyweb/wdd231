export function mediaCardTemplate(info) {
    return `
      <div class="park-info-card">
        <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}">
          <h2 class="card-title">${info.name}</h2>
          <p class="card-description">${info.description}</p>
        </a>
      </div>
    `;
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