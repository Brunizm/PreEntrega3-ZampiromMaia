// Coffee purchase simulator: https://workworldcoffee.com/

const coffeeData = {
    "north america": {
        "new york": { cafes: ["Remi43", "Devocionusa", "Stumptown Coffee"], price: 5 },
        "san francisco": { cafes: ["SightGlass", "Capital One Cafe", "Bazaar Cafe SF"], price: 6 },
        "austin": { cafes: ["Houndstooth Coffee", "Mozart's Coffee", "Medici Roasting"], price: 4 },
        "vancouver": { cafes: ["Funk Coffee Bar", "Matchstick", "Revolver Coffee"], price: 5 },
        "toronto": { cafes: ["Boxcar Social", "Pilot Coffee", "Dineen Coffee Co"], price: 5 },
        "mexico city": { cafes: ["Quentin Cafe Mx", "Freims Mex", "Coffeefy Workafe"], price: 4 }
    },
    "south america": {
        "buenos aires": { cafes: ["Paul French Gallery", "Comparti Moshu", "Casa Neuza"], price: 3 },
        "sao paulo": { cafes: ["Santo Grão", "Mug Sp Café & Brunch", "Coffee Lab"], price: 4 },
        "bogota": { cafes: ["Bogota Coffee Roasters", "Diosa Cafe", "Colo Coffee Roasters"], price: 3 },
        "lima": { cafes: ["Arabica Espresso Bar", "Puku Puku", "Colonia & Co"], price: 3 },
        "quito": { cafes: ["Botanica", "Isveglio", "La Casa del Cacao"], price: 3 }
    },
    "asia": {
        "bali": { cafes: ["Noah", "Miel Bali", "Blou Cafe Canggu"], price: 7 },
        "tokyo": { cafes: ["Streamer Coffee", "Cafe Kitsune", "Blue Bottle"], price: 7 },
        "seoul": { cafes: ["Vers Garden", "Astronomers Coffee", "Komfortabel"], price: 6 },
        "bangkok": { cafes: ["Gallery Drip Coffee", "Blue Whale Cafe", "Roots at The Commons"], price: 5 },
        "hong kong": { cafes: ["The Coffee Academics", "NOC Coffee Co.", "Elephant Grounds"], price: 6 }
    },
    "europe": {
        "lisbon": { cafes: ["Curva Cafe", "Hello, Kristof", "Outsite"], price: 4 },
        "paris": { cafes: ["Coutume", "Le Pigalle", "Kaffee Bar"], price: 6 },
        "rome": { cafes: ["Antica Caffe Roma", "Barnum Cafe", "Ex Circus"], price: 5 },
        "berlin": { cafes: ["The Barn", "Bonanza Coffee", "Father Carpenter"], price: 5 },
        "amsterdam": { cafes: ["Lot Sixty One", "Back to Black", "White Label Coffee"], price: 5 }
    },
    "oceania": {
        "sydney": { cafes: ["Single O", "Reuben Hills", "Edition Coffee Roasters"], price: 6 },
        "melbourne": { cafes: ["Proud Mary", "Market Lane Coffee", "Patricia Coffee Brewers"], price: 6 },
        "auckland": { cafes: ["Chuffed", "Allpress Espresso", "Daily Bread"], price: 5 },
        "brisbane": { cafes: ["John Mills Himself", "Blackstar Coffee", "Bunker Coffee"], price: 5 },
        "wellington": { cafes: ["Flight Coffee", "Customs by Coffee Supreme", "Raglan Roast"], price: 5 }
    },
    "africa": {
        "cape town": { cafes: ["Truth Coffee Roasting", "Deluxe Coffeeworks", "Origin Coffee Roasting"], price: 4 },
        "johannesburg": { cafes: ["Bean There", "Father Coffee", "Motherland Coffee"], price: 4 },
        "nairobi": { cafes: ["Artcaffe", "Java House", "Connect Coffee"], price: 3 },
        "lagos": { cafes: ["My Coffee Lagos", "Cafe Neo", "Artisan Roast"], price: 4 },
        "cairo": { cafes: ["Espresso Lab", "Kafein Cafe", "Maadi Coffee Roasters"], price: 3 }
    },
    "middle east": {
        "dubai": { cafes: ["Raw Coffee Company", "The Espresso Lab", "Tom&Serg"], price: 6 },
        "beirut": { cafes: ["Cafe Younes", "Urbanista", "Sip"], price: 5 },
        "riyadh": { cafes: ["Draft Cafe", "The Roasting House", "Camel Step"], price: 5 },
        "tel aviv": { cafes: ["Cafe Xoho", "Cafe Puaa", "Edmund Cafe"], price: 5 },
        "amman": { cafes: ["Rumi Cafe", "The Coffee Room", "Cafe Hanin"], price: 4 }
    }
};

document.getElementById('nextButton').addEventListener('click', checkContinent);
document.getElementById('searchButton').addEventListener('click', findCafes);
document.getElementById('calculateButton').addEventListener('click', calculateTotal);

function capitalizeWords(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function getAvailableContinents() {
    return Object.keys(coffeeData).map(continent => capitalizeWords(continent)).join(', ');
}

function validateQuantity(quantity) {
    return !isNaN(quantity) && quantity > 0;
}

function checkContinent() {
    const continentInput = capitalizeWords(document.getElementById('continent').value.trim());
    const resultsDiv = document.getElementById('results');
    const cityDiv = document.getElementById('cityDiv');

    if (continentInput && coffeeData[continentInput.toLowerCase()]) {
        localStorage.setItem('continent', continentInput);
        resultsDiv.innerHTML = `<p>Continent "${continentInput}" found. Now enter your city.</p>`;
        cityDiv.style.display = "block";
    } else {
        resultsDiv.innerHTML = ''; 
        cityDiv.style.display = "none"; 
        alert(`No continent found by the name "${continentInput}". Please try again. Available continents are: ${getAvailableContinents()}`);
    }
}

function findCafes() {
    const continentInput = localStorage.getItem('continent');
    const cityInput = capitalizeWords(document.getElementById('city').value.trim());
    const resultsDiv = document.getElementById('results');
    const quantityDiv = document.getElementById('quantityDiv');

    if (!cityInput) {
        alert("Please enter a valid city.");
        return;
    }

    const continentData = coffeeData[continentInput.toLowerCase()];
    if (continentData && continentData[cityInput.toLowerCase()]) {
        localStorage.setItem('city', cityInput);
        const cityData = continentData[cityInput.toLowerCase()];
        const cafes = cityData.cafes;

        let resultHTML = `<h3>Coffee spots in ${cityInput}, ${continentInput}:</h3><ul>`;
        cafes.forEach(cafe => {
            resultHTML += `<li>${cafe}</li>`;
        });
        resultHTML += `</ul>`;
        resultsDiv.innerHTML = resultHTML;
        quantityDiv.style.display = "block";
    } else {
        resultsDiv.innerHTML = ''; 
        alert(`No coffee spots found in ${cityInput}, ${continentInput}. Please check your input.`);
        quantityDiv.style.display = "none";
    }
}

function calculateTotal() {
    const continentInput = localStorage.getItem('continent');
    const cityInput = localStorage.getItem('city');
    const quantityInput = parseInt(document.getElementById('quantity').value, 10);
    const resultsDiv = document.getElementById('results');

    if (coffeeData[continentInput.toLowerCase()] && coffeeData[continentInput.toLowerCase()][cityInput.toLowerCase()]) {
        const cityData = coffeeData[continentInput.toLowerCase()][cityInput.toLowerCase()];
        const price = cityData.price;

        if (validateQuantity(quantityInput)) {
            const totalCost = quantityInput * price;
            resultsDiv.innerHTML += `<p>Total cost for ${quantityInput} coffee(s): $${totalCost}.</p>`;
            console.log(`User bought ${quantityInput} coffee(s) in ${cityInput}, ${continentInput} for $${totalCost}.`);
        } else {
            resultsDiv.innerHTML += `<p>Invalid quantity. Please enter a valid number greater than 0.</p>`;
        }
    } else {
        resultsDiv.innerHTML = `<p>Error in calculating the total cost. Please try again.</p>`;
    }
}
