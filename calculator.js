document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbon-form');
    const resultDiv = document.getElementById('result');

    // Emission factors 
    const electricityFactor = 0.5; // kg CO2 per kWh
    const drivingFactors = {
        'small-car': 0.15, // kg CO2 per km
        'medium-car': 0.2,
        'large-car': 0.3,
        'motorcycle': 0.1
    };
    const flightFactors = {
        'short-haul': 200, // kg CO2 per flight
        'long-haul': 1000
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // user input
        const electricity = parseFloat(document.getElementById('electricity').value) || 0;
        const driving = parseFloat(document.getElementById('driving').value) || 0;
        const vehicle = document.getElementById('vehicle').value;
        const shortFlights = parseInt(document.getElementById('short-flights').value) || 0;
        const longFlights = parseInt(document.getElementById('long-flights').value) || 0;

        // Calculate annual footprint
        const electricityFootprint = electricity * 12 * electricityFactor;
        const drivingFootprint = driving * 52 * drivingFactors[vehicle];
        const flightFootprint = (shortFlights * flightFactors['short-haul']) + (longFlights * flightFactors['long-haul']);

        const totalFootprint = (electricityFootprint + drivingFootprint + flightFootprint) / 1000; // Convert to tons

        // Display result
        resultDiv.innerHTML = `
            <h2>Your Estimated Annual Carbon Footprint is:</h2>
            <p class="footprint">${totalFootprint.toFixed(2)} tons of CO2</p>
            <hr>
            <h3>Breakdown:</h3>
            <ul>
                <li><strong>Electricity:</strong> ${(electricityFootprint / 1000).toFixed(2)} tons</li>
                <li><strong>Driving:</strong> ${(drivingFootprint / 1000).toFixed(2)} tons</li>
                <li><strong>Flights:</strong> ${(flightFootprint / 1000).toFixed(2)} tons</li>
            </ul>
        `;
    });
});
