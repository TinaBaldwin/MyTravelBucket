//require('dotenv').config();


'use strict';

//const express = require('express');
//const app = express();
//const axios = require('axios');

//app.use(express.json());



// Call to Quote API //

let button = document.getElementById('getQuote').addEventListener('click', getQuote);

function getQuote() {
  fetch('https://api.quotable.io/random').then((data) => {
    data.json().then((json) => {
      document.getElementById('quote').innerHTML = json.content
      document.getElementById('quoteAuthor').innerHTML = json.author
      console.log(json)
    }); 
  });
};

document.onload = getQuote();


const port = 3000;
//app.listen(port, () => {
//  console.log(`Server listening on port ${port}`);
//});

// Middleware to serve static files
app.use(express.static('../frontend'));
  









// Future Get Weather information from Accuweather Code//

//const getWeather = async (cityKey) => {
//async function getWeather(cityKey){
//  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//  const query = `${cityKey}?apikey=${process.env.ACCUWEATHER_KEY}`;

//  try {
//  const response = await fetch(base + query);
//  const data = await response.json()
//  console.log(data)
//  }
//  catch(error) {
//   console.error(error);
//  };

//};


// future Get City information Accuweather //
//const getCity = async (cityNameInput) => {
//async function getCity(cityName) { // this is what chat GPT suggested
//  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//    const query = `?apikey=${process.env.ACCUWEATHER_KEY}&q=${cityNameInput}`;
    
//    const response = await fetch(base + query);
//    const data = await response.json();
//    console.log(data);
//    console.log(data[0].Key);
//    const cityKey = data[0].Key;
//    return cityKey;
    
   // if (data.length === 0) {
  //    throw new Error('City not found');
  
    
    //const cityKey = data[0].Key;
   // return cityKey;
//}

//getCity('cityName')
// .then(cityKey => getWeather(cityKey))
// .then(weatherData => {
//  console.log(weatherData.temperature, weatherData.unit);
//})
//  .catch(error => {
//    console.error(error)
//});


// .then(data => getWeather(data.Key))
//.then(data => {
 //   console.log(data);
 // })
 // .catch(error => {
  //   console.error(error);
 // });

//    const json = response.data;
//    console.log('API response received:', json);

//    if (json.length === 0 || json[0].Code) {
//      res.send({ "value": "Error", "unit": "None" });
//     return;
//    } 

//    const returnObject = {
 //     "value": json[0].Temperature.Imperial.Value,
//      "unit": json[0].Temperature.Imperial.Unit
 //   };

 //   console.log(returnObject);
//    res.status(200).send(returnObject);
//  } catch (error) {
//    console.error(error);
//    res.status(500).send("Internal Server Error");
//  }
//});
 
