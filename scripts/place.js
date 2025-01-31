document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamically update weather data in the table (Uganda-based data)
    const weatherData = {
        temperature: "30°C",
        conditions: "Sunny",
        wind: "10 km/h",
        windChill: "29°C"
    };

    const weatherTable = document.getElementById("weather");
    if (weatherTable) {
        const rows = weatherTable.querySelectorAll("tbody tr");
        if (rows.length >= 4) {
            rows[0].cells[1].textContent = weatherData.temperature;
            rows[1].cells[1].textContent = weatherData.conditions;
            rows[2].cells[1].textContent = weatherData.wind;
            rows[3].cells[1].textContent = weatherData.windChill;
        }
    }

    // 2. Update footer content dynamically with Uganda-specific details
    const footerElement = document.getElementById("footer-content");
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        const lastModified = new Date(document.lastModified);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const modifiedDate = lastModified.toLocaleDateString(undefined, options);
        const modifiedTime = lastModified.toLocaleTimeString();

        footerElement.innerHTML = `
            &copy; ${currentYear} Nicholas Ssewanyana  Kampala - Uganda
            <br>All Rights Reserved
            <br>Last Modified: ${modifiedDate}, ${modifiedTime}
        `;
    }
});