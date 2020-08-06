// Add console.log to check to see if our code is working.
console.log("working");

let map = L.map('mapid').setView([39.5, -98.5],3);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //can be changed to a variety of ids; which will make the mal look different (different tile styles)
    id: 'mapbox.streets',
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Street": streets,
    "Satellite": satelliteStreets,
  };


// Create the map object with a center and zoom level.


streets.addTo(map)
//L.control.layers(baseMaps).addTo(map)

//let url= 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

//d3.json(url).then(function(data){
    //L.geoJson(data).addTo(map);
//});
