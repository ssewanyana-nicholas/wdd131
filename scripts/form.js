// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified on: ${lastModified}`;

const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate select options dynamically
document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set the last modified date
    document.getElementById('lastModified').textContent = `Last modified on: ${document.lastModified}`;
});

// Form validation
document.querySelector("form").addEventListener("submit", function (event) {
    const productSelect = document.getElementById("product");
    const rating = document.querySelector('input[name="rating"]:checked');
    const installDate = document.getElementById("install-date");

    if (!productSelect.value) {
        alert("Please select a product.");
        event.preventDefault();
    } else if (!rating) {
        alert("Please provide an overall rating.");
        event.preventDefault();
    } else if (!installDate.value) {
        alert("Please provide the date of installation.");
        event.preventDefault();
    }
});