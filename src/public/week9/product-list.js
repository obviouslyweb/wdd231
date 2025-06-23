async function getProductList(url) {
    const response = await fetch(url);
    const list = await response.json();

    const productlist = document.getElementById("product-list");
    
    list.forEach(element => {
        productlist.insertAdjacentHTML("afterbegin", 
            `
            <div class="product-card">
                <a href="product-details.html?id=${element.id}">${element.name}</a>
            </div>
            `
        )
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getProductList("dental.json");
});