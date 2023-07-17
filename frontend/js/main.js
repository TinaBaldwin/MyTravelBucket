'use strict';


//hamburger //

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});

// Accessing data in the cityData array //

fetch('cityData.json')
    .then(response => response.json())
    .then(cityDataArray => {
         
        // City 1 - Boston //
        document.getElementById('city1-sentence').textContent = `The best time to visit ${cityDataArray[0].name} is from ${cityDataArray[0].monthsToVisit}. One of the most popular attractions is ${cityDataArray[0].attraction}. With a 2021 population of ${cityDataArray[0].population} and a nickname of ${cityDataArray[0].nickname}, it is a ${cityDataArray[0].adjective} place to visit!`;
 
        // City 2 - Charleston //
        document.getElementById('city2-sentence').textContent = `The best time to visit ${cityDataArray[1].name} is from ${cityDataArray[1].monthsToVisit}. One of the most popular attractions is ${cityDataArray[1].attraction}. With a 2021 population of ${cityDataArray[1].population} and a nickname of ${cityDataArray[1].nickname}, it is a ${cityDataArray[1].adjective} place to visit!`;
 
        // City 3 - New York City //
        document.getElementById('city3-sentence').textContent = `The best time to visit ${cityDataArray[2].name} is from ${cityDataArray[2].monthsToVisit}. One of the most popular attractions is ${cityDataArray[2].attraction}. With a 2021 population of ${cityDataArray[2].population} and a nickname of ${cityDataArray[2].nickname}, it is a ${cityDataArray[2].adjective} place to visit!`;

        // City 3 - San Francisco //
         document.getElementById('city4-sentence').textContent = `The best time to visit ${cityDataArray[3].name} is from ${cityDataArray[3].monthsToVisit}. One of the most popular attractions is ${cityDataArray[3].attraction}. With a 2021 population of ${cityDataArray[3].population} and a nickname of ${cityDataArray[3].nickname}, it is a ${cityDataArray[3].adjective} place to visit!`;

         // City 3 - Savannah //
        document.getElementById('city5-sentence').textContent = `The best time to visit ${cityDataArray[4].name} is from ${cityDataArray[4].monthsToVisit}. One of the most popular attractions is ${cityDataArray[4].attraction}. With a 2021 population of ${cityDataArray[4].population} and a nickname of ${cityDataArray[4].nickname}, it is a ${cityDataArray[4].adjective} place to visit!`;
    })
    .catch(error => {
        console.error('Error fetching city data:', error);
    });

// Validate Email Address entered by user //

function verifyEmail() {
    const input = document.getElementById("emailAddr").value;
    const regex = (/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i);
    if(input.trim()=="")
    {
        validationMessage.textContent = "Please enter a valid email";
    }
    else if ((regex.test(input)))
    {
        validationMessage.textContent = "Email submitted successfully";
    }
    else
    {
        validationMessage.textContent = "Try again, that email is not valid";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fetchQuoteButton = document.getElementById('fetchQuote');
    const quoteElement = document.getElementById('quote_text');
    let quoteLoaded = false; // Track if the quote has already been loaded

    fetchQuoteButton.addEventListener('click', () => {
        if (!quoteLoaded) {
            axios
                .get('/quote')
                .then(response => {
                    const quote = response.data.quote;
                    quoteElement.textContent = quote;
                    quoteLoaded = true; // Update the flag indicating the quote has been loaded
                })
                .catch(error => {
                    console.error(error);
                });
        }
    });
});








// Future Code for Accuweather //
//  const app = document.getElementById('app');
//  const weatherButton = document.getElementById('submit');
   
//  weatherButton.addEventListener('click', onWeatherSubmit, false);

//  function onWeatherSubmit(e) {
//    e.preventDefault();
//    const cityNameInput = document.getElementById('cityName');
//    const cityName = cityNameInput.value;
    
    //fetch(`/weather/${cityName}`)
       // .then(response => response.json())
      //  .then(data => {
       //     const weatherValueElement = document.getElementById('weather_value'); //line added
      //      weatherValueElement.textContent =`Temperature: ${data.temperature}`;
      //  })
      //  .catch(error => {
       //     console.error(error);
       // })
    //}



  
 