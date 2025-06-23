async function getProductDetails(url) {
    const response = await fetch(url);
    const list = await response.json();

    const productID = getProductID();
    const product = list.find(item => item.id === productID);

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-desc").textContent = product.description;
        document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
        document.getElementById("product-photo").src = product.imageUrl;
        document.getElementById("product-photo").alt = product.name;
    }
}

function getProductID() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

async function showModal() {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove("hide-modal");
    modal.setAttribute("aria-hidden", "false");
}

async function hideModal() {
    const modal = document.querySelector(".modal-container");
    modal.classList.add("hide-modal");
    modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("DOMContentLoaded", () => {
    getProductDetails("dental.json");

    if (!localStorage.getItem("hasVisited")) {
        showModal();
        localStorage.setItem("hasVisited", "true");
    }

    document.getElementById("submit").addEventListener("click", () => {
        const emailInput = document.querySelector('input[name="email"]');

        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            return;
        }

        hideModal();
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
            hideModal();
        }
    });

    document.querySelector(".modal-container").addEventListener("click", (event) => {
        if (event.target === document.querySelector(".modal-container")) {
            hideModal();
        }
    });
});

