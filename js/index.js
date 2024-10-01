// my website https://workworldcoffee.com/

const coffeeData = {
  "north america": {
      "new york": { cafes: ["Remi43", "Devocionusa", "Stumptown Coffee"], price: 5 },
      "san francisco": { cafes: ["SightGlass", "Capitalonecafe", "Bazaarcafesf"], price: 6 },
      "austin": { cafes: ["CHoundstoothcoffee", "Mozartscoffee", "Medici Roasting"], price: 4 },
      "vancouver": { cafes: ["Funk Coffee Bar", "Matchstickyvr", "Revolver Coffee"], price: 5 },
      "toronto": { cafes: ["Boxcar Social", "Pilot Coffee", "Dineen Coffee Co"], price: 5 },
      "mexico city": { cafes: ["Quentin Cafe Mx", "Freims Mex", "Coffeefy Workafe"], price: 4 },
      "los angeles": { cafes: ["The Boy And The Bear Co", "Verve Coffee", "Eight Fold Coffee"], price: 6 },
      "montreal": { cafes: ["Crew Collective & Cafe", "Café Saint-Henri", "Café Falco"], price: 4 },
      "miami": { cafes: ["Miam Cafe", "Bebitos Cafe", "Otlmia"], price: 5 },
      "boston": { cafes: ["Tatte Bakery", "Jaho Coffee", "Ogawa Coffee"], price: 5 }
  },
  "south america": {
      "buenos aires": { cafes: ["Paul French Gallery", "Comparti Moshu", "Casa Neuza"], price: 3 },
      "sao paulo": { cafes: ["Santo Grão", "Mug Sp Café & Brunch", "Coffee Lab"], price: 4 },
      "rio de janeiro": { cafes: ["C o L A B", "Fika Cafes", "Biblio Maison"], price: 4 },
      "medellín": { cafes: ["Pergamino Café", "Hijamia Coffee", "Semilla Cafe Coworking"], price: 3 },
      "porto alegre": { cafes: ["Somos Ginkgo", "Yami Cafe", "Ccmarioquintana"], price: 3 },
      "bogota": { cafes: ["Bogota Coffee Roasters", "Diosa Cafe", "Colo Coffee Roasters"], price: 3 },
      "lima": { cafes: ["Caleta Dolsa Coffee", "Colonia & Co", "La Bodega Verde"], price: 4 },
      "montevideo": { cafes: ["The Lab Coffee Roasters", "Oro del Rhin", "Patrimonio Cafe"], price: 4 }
  },
  "asia": {
      "bali": { cafes: ["Noah", "Miel Bali", "Blou Cafe Canggu"], price: 7 },
      "bangkok": { cafes: ["Roast", "Café Craft", "Ground Coffee"], price: 6 },
      "kuala lumpur": { cafes: ["Lokl Coffee Co", "Common Man Coffee", "Feeka Coffee Roasters"], price: 5 },
      "singapore": { cafes: ["Syip Cafe", "Runes Coffee", "The Ritual"], price: 8 },
      "tokyo": { cafes: ["Streamer Coffee", "Cafe Kitsune", "Blue Bottle"], price: 7 },
      "seoul": { cafes: ["Vers Garden", "Astronomers Coffee", "Komfortabel"], price: 6 },
      "dubai": { cafes: ["Tom & Serg", "Dmcc Lounge", "Friends Avenue"], price: 9 }
  },
  "europe": {
      "lisbon": { cafes: ["Curva Cafe", "Hello, Kristof", "Outsite"], price: 4 },
      "barcelona": { cafes: ["Nomad Coffee", "Ona Coffee", "Frizzant"], price: 5 },
      "berlin": { cafes: ["Erchy", "Father Carpenter", "Bonanza Coffee"], price: 5 },
      "amsterdam": { cafes: ["Kanarie Club", "Back To Black", "Lebkov & Sons"], price: 6 },
      "prague": { cafes: ["Cafedu", "Cafe Letka", "Můj Sálek Kávy"], price: 4 },
      "budapest": { cafes: ["Franziska", "My Little Melbourne", "Montage Budapest"], price: 4 },
      "vienna": { cafes: ["Balthasar Kaffee", "Jonas Reindl Coffee Roasters", "Selleny's Bar"], price: 5 },
      "dublin": { cafes: ["The Art of Coffee", "Copper Straw", "Third Space Cafe"], price: 6 },
      "copenhagen": { cafes: ["Democratic Coffee Bar", "Paludan Bogcafé", "Picnic Paa Glyptoteket"], price: 6 },
      "stockholm": { cafes: ["Espresso House", "Café Bla Lotus", "Komet Stockholm"], price: 6 },
      "madrid": { cafes: ["Yasemin & Tuncel", "Café del Art", "Lamucca"], price: 5 },
      "paris": { cafes: ["Coutume", "Le Pigalle", "Kaffee Bar"], price: 6 },
      "london": { cafes: ["Ozone Coffee", "Store St Espresso", "Harris And Hoole"], price: 6 },
      "rome": { cafes: ["Anticaferoma", "Barnumroma", "Ex_Circus"], price: 5 },
      "brussels": { cafes: ["Cafe Capitale", "Belga Coffee", "Léopold Café Presse"], price: 4 },
      "athens": { cafes: ["Third Place", "Kinono", "Plegma Shop"], price: 4 }
  }
};

function checkContinent() {
  const continentInput = document.getElementById('continent').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  const cityDiv = document.getElementById('cityDiv');

  if (continentInput && coffeeData[continentInput]) {
      resultsDiv.innerHTML = `<p>Continent "${continentInput}" found. Now enter your city.</p>`;
      cityDiv.style.display = "block";  
  } else {
      resultsDiv.innerHTML = `<p>No continent found by the name "${continentInput}". Please check your input.</p>`;
      cityDiv.style.display = "none";  
  }
}

function findCafes() {
  const continentInput = document.getElementById('continent').value.trim().toLowerCase();
  const cityInput = document.getElementById('city').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  const quantity = parseInt(prompt("How many coffees would you like to buy?"), 10);

  if (cityInput && coffeeData[continentInput] && coffeeData[continentInput][cityInput]) {
      const cityData = coffeeData[continentInput][cityInput];
      const cafes = cityData.cafes;
      const price = cityData.price;
      let resultHTML = `<h3>Coffee spots in ${cityInput}, ${continentInput}:</h3><ul>`;

      cafes.forEach(cafe => {
          resultHTML += `<li>${cafe}</li>`;
      });
      resultHTML += `</ul>`;

      const totalCost = quantity * price;
      resultHTML += `<p>Total cost for ${quantity} coffee(s): $${totalCost}.</p>`;
      resultsDiv.innerHTML = resultHTML;
  } else {
      resultsDiv.innerHTML = `<p>No coffee spots found in ${cityInput}, ${continentInput}.</p>`;
  }
}