/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convert = document.getElementById("convert-btn");
const lengthValue = document.getElementById("length-value");
const volumeValue = document.getElementById("volume-value");
const massValue = document.getElementById("mass-value");


convert.addEventListener('click', function() {
    let number = parseFloat(document.getElementById("input-value").value);

    if (isNaN(number)) {
        alert('Please enter a valid number');
        return;
    }

    const metersToFeet = (number * 3.28084).toFixed(3);
    const feetToMeters = (number / 3.28084).toFixed(3);

    const litersToGallons = (number * 0.264172).toFixed(3);
    const gallonsToLiters = (number / 0.264172).toFixed(3);

    const kilosToPounds = (number * 2.20462).toFixed(3);
    const poundsToKilos = (number / 2.20462).toFixed(3);

    
    lengthValue.textContent = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`;
    volumeValue.textContent = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`;
    massValue.textContent = `${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`;
});