'use strict';


//hamburger //

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});


// Function build city paragraphs //

function buildSentences(cityDataArray) {
    for (let i = 0; i < cityDataArray.length; i++) {
      const cityData = cityDataArray[i];
      const sentence = `The best time to visit ${cityData.name} is from ${cityData.monthsToVisit}. One of the most popular attractions is ${cityData.attraction}. With a 2021 population of ${cityData.population} and a nickname of ${cityData.nickname}, it is a ${cityData.adjective} place to visit!`;
  
      const sentenceId = `city${i + 1}-sentence`;
      document.getElementById(sentenceId).textContent = sentence;
    }
  };

  const cityDataArray = [
    { 
        "city" : "City 1",
        "name" : "Boston",
        "monthsToVisit" : "June to October",
        "attraction" : "The Freedom Trail",
        "population" : "654,776 thousand", 
        "nickname" : "Beantown",
        "adjective" : "great"},
    { "city" : "City 2", 
        "name" : "Charleston",
        "monthsToVisit" : "mid March to May and September to November",
        "attraction" : "City Market",
        "population" : "151,612 thousand", 
        "nickname" : "The Holy City",
        "adjective" : "fabulous"},
    { "city" : "City 3",
        "name" : "New York City", 
        "monthsToVisit" : "April to June and September to early November",
        "attraction" : "Times Square",
        "population" : "8.468 million",
        "nickname" : "the Big Apple",
        "adjective" : "vibrant"},
    { "city" : "City 4",
        "name" : "San Francisco",
        "monthsToVisit" : "September to November", 
        "attraction" : "Golden Gate Park",
        "population" : "815,201 thousand", 
        "nickname" : "The Golden City", 
        "adjective" : "breathtaking"},
    { "city" : "City 5",
        "name" : "Savannah",
        "monthsToVisit" : "March to July", 
        "attraction" : "Savannah Historic District", 
        "population" : "147,088 thousand", 
        "nickname" : "Hostess City of the South", 
        "adjective" : "beautiful"
    }
];

  
buildSentences(cityDataArray);
  


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
};

//document.addEventListener('DOMContentLoaded', () => {
 //   const fetchQuoteButton = document.getElementById('fetchQuote');
 //   const quoteElement = document.getElementById('quote_text');
 //   let quoteLoaded = false; // Track if the quote has already been loaded



//    fetchQuoteButton.addEventListener('click', () => {
//        if (!quoteLoaded) {
 //           axios
//                .get('/quote')
//                .then(response => {
//                    const quote = response.data.quote;
//                    quoteElement.textContent = quote;
//                    quoteLoaded = true; // Update the flag indicating the quote has been loaded
//                })
//               .catch(error => {
//                    console.error(error);
//                });
//        }
//    });
//});








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



  
 