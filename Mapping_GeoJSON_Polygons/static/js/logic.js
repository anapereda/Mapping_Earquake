// Add console.log to check to see if our code is working.
console.log("working");

// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/street-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Street: streets,
    Dark: satelliteStreets,
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [43.7, -79.3],
	zoom: 11,
	layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL

//needs to be changed
let torontoHoods = "https://raw.githubusercontent.com/anapereda/Mapping_Earquake/master/torontoNeighborhoods.json";

// Create a style for the lines.
//let myStyle = {
	//color: "#ffffa1",
	//weight: 2
//}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data) 
    //{
      //style:myStyle,
      //onEachFeature: function (feature, layer){
        //layer.bindPopup('<h3> Airline:' + feature.properties.airline + "</h2> <hr> <h4> Destination: " + feature.properties.dst + " </h4>");
    //}
    //})
    .addTo(map);
});
