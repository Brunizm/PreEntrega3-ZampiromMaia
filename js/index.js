// Coffee purchase simulator: https://workworldcoffee.com/

const coffeeData = {
    "north america": {
      "new york": { cafes: ["Remi43", "Devocionusa", "Stumptown Coffee"], price: 5 },
      "san francisco": { cafes: ["SightGlass", "Capitalonecafe", "Bazaarcafesf"], price: 6 },
      "austin": { cafes: ["CHoundstoothcoffee", "Mozartscoffee", "Medici Roasting"], price: 4 },
      "vancouver": { cafes: ["Funk Coffee Bar", "Matchstickyvr", "Revolver Coffee"], price: 5 },
      "toronto": { cafes: ["Boxcar Social", "Pilot Coffee", "Dineen Coffee Co"], price: 5 },
      "mexico city": { cafes: ["Quentin Cafe Mx", "Freims Mex", "Coffeefy Workafe"], price: 4 }
    },
    "south america": {
      "buenos aires": { cafes: ["Paul French Gallery", "Comparti Moshu", "Casa Neuza"], price: 3 },
      "sao paulo": { cafes: ["Santo Grão", "Mug Sp Café & Brunch", "Coffee Lab"], price: 4 },
      "bogota": { cafes: ["Bogota Coffee Roasters", "Diosa Cafe", "Colo Coffee Roasters"], price: 3 }
    },
    "asia": {
      "bali": { cafes: ["Noah", "Miel Bali", "Blou Cafe Canggu"], price: 7 },
      "tokyo": { cafes: ["Streamer Coffee", "Cafe Kitsune", "Blue Bottle"], price: 7 },
      "seoul": { cafes: ["Vers Garden", "Astronomers Coffee", "Komfortabel"], price: 6 }
    },
    "europe": {
      "lisbon": { cafes: ["Curva Cafe", "Hello, Kristof", "Outsite"], price: 4 },
      "paris": { cafes: ["Coutume", "Le Pigalle", "Kaffee Bar"], price: 6 },
      "rome": { cafes: ["Anticaferoma", "Barnumroma", "Ex_Circus"], price: 5 }
    }
  };
  
  function validateQuantity(quantity) {
    return !isNaN(quantity) && quantity > 0;
  }
  
  function checkContinent() {
    const continentInput = document.getElementById('continent').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
    const cityDiv = document.getElementById('cityDiv');
  
    if (continentInput && coffeeData[continentInput]) {
      resultsDiv.innerHTML = `<p>Continent "${continentInput}" found. Now enter your city.</p>`;
      cityDiv.style.display = "block";
    } else {
      alert(`No continent found by the name "${continentInput}". Please try again.`);
      cityDiv.style.display = "none";
    }
  }
  
  function findCafes() {
    const continentInput = document.getElementById('continent').value.trim().toLowerCase();
    const cityInput = document.getElementById('city').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
  
    if (coffeeData[continentInput] && coffeeData[continentInput][cityInput]) {
      const cityData = coffeeData[continentInput][cityInput];
      const cafes = cityData.cafes;
      const price = cityData.price;
  
      const quantity = parseInt(prompt("How many coffees would you like to buy?"), 10);
  
      if (validateQuantity(quantity)) {
        const totalCost = quantity * price;
        let resultHTML = `<h3>Coffee spots in ${cityInput}, ${continentInput}:</h3><ul>`;
  
        cafes.forEach(cafe => {
          resultHTML += `<li>${cafe}</li>`;
        });
        resultHTML += `</ul>`;
        resultHTML += `<p>Total cost for ${quantity} coffee(s): $${totalCost}.</p>`;
  
        resultsDiv.innerHTML = resultHTML;
        console.log(`User bought ${quantity} coffee(s) in ${cityInput}, ${continentInput} for $${totalCost}.`);
      } else {
        alert("Invalid quantity. Please enter a valid number greater than 0.");
      }
    } else {
      alert(`No coffee spots found in ${cityInput}, ${continentInput}. Please check your input.`);
    }
  }
  