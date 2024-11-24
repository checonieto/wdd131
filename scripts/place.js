// Update Footer Year and Last Updated
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastUpdated').textContent = document.lastModified;

// Calculate Wind Chill
function calculateWindChill(tempCelsius, windSpeedKmh) {
    const tempFahrenheit = (tempCelsius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
    const windSpeedMph = windSpeedKmh * 0.621371; // Convert km/h to mph

    if (tempFahrenheit <= 50 && windSpeedMph > 3) {
        const windChillF =
            35.74 +
            0.6215 * tempFahrenheit -
            35.75 * Math.pow(windSpeedMph, 0.16) +
            0.4275 * tempFahrenheit * Math.pow(windSpeedMph, 0.16);
        const windChillCelsius = ((windChillF - 32) * 5) / 9; // Convert back to Celsius
        return windChillCelsius.toFixed(2) + "°C";
    }

    return "N/A"; // Wind chill not applicable
}

// Example Weather Data
const temp = 25; // Celsius
const windSpeed = 15; // km/h

// Update Wind Chill
document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed);