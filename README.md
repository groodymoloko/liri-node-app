# liri-node-app (LiriBOT)

## NPM Modules
LiriBOT is a Node command line application that can fetch information using the following NPM modules:
* node-spotify-api
* axios
* fs
* moment
* dotenv
  
## Functions
LiriBOT makes use of the following command line arguments to retrieve and display particular types of information:
* **concert-this**: enter a band name after this argument to see a venue and date where the band is playing next
* **spotify-this-song**: enter a song name after this argument to retrieve the artist, album, and other information
* **movie-this**: enter a movie title after this argument to get the movie's year, list of actors, etc.
* **do-what-it-says**: run this command without any additional arguments to retrieve information from a separate text file

## Examples
* $ node liri.js concert-this Muse
* $ node liri.js spotify-this-song Funkytown
* $ node liri.js movie-this Ghostbusters
* $ node liri.js do-what-it-says

The following two screenshots show the outpue for some examples of the various modules included in LiriBOT:

![Application Examples](/screenshot1.jpg?raw=true)

![Application Examples](/screenshot2.jpg?raw=true)
