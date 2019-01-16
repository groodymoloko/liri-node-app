
require("dotenv").config();
const moment = require('moment');
const Spotify = require('node-spotify-api');
const axios = require("axios");
const keys = require("./keys.js");
const fs = require('fs');
const spotify = new Spotify(keys.spotify);
let liriCommand = process.argv[2];
let liriProperty = process.argv[3];

switch (liriCommand) {
    case "concert-this":
        concert();
        break;
    
    case "spotify-this-song":
        spot();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        dowhat();
        break;
}

function concert() {
    if (liriProperty === "" || liriProperty === undefined) {
        console.log("*******************");
        console.log("You must enter a band name!");
    } else {
    console.log(liriProperty);
    axios.get("https://rest.bandsintown.com/artists/" + liriProperty + "/events?app_id=codingbootcamp").then(
        function(response) {
        console.log("******************");
        console.log("VENUE: " + response.data[0].venue.name);
        console.log("CITY: " + response.data[0].venue.city);
        console.log("DATE: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
    });
    }   
}

function spot() {
    if (liriProperty === "" || liriProperty === undefined) {
        liriProperty = "The Sign, Ace of Base";
    }
    spotify.search({ type: 'track', query: liriProperty, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log("******************");
        console.log("ARTIST: " + data.tracks.items[0].artists[0].name);
        console.log("SONG: " + data.tracks.items[0].name);
        console.log("PREVIEW: " + data.tracks.items[0].preview_url);
        console.log("ALBUM: " + data.tracks.items[0].album.name);
    });
}

function movie() {
    if (liriProperty === "" || liriProperty === undefined) {
        liriProperty = "Mr. Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + liriProperty + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
        console.log("******************");
        console.log("TITLE: " + response.data.Title);
        console.log("YEAR: " + response.data.Year);
        console.log(response.data.Ratings[0].Source + " " + response.data.Ratings[0].Value);
        console.log(response.data.Ratings[1].Source + " " + response.data.Ratings[1].Value);
        console.log("COUNTRY: " + response.data.Country);
        console.log("LANGUAGE: " + response.data.Language);
        console.log("PLOT: " + response.data.Plot);
        console.log("ACTORS: " + response.data.Actors);
     });
}

function dowhat() {
    fs.readFile('random.txt', "utf8", function(err, data) {
    let dataArray = data.split(",");
    liriCommand = dataArray[0];
    liriProperty = dataArray[1];
    spot(liriProperty);
    });
}
