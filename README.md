# liri-node-app (LiriBOT)

## NPM Modules & APIs
LiriBOT is a Node command line application that can fetch information using the following NPM modules and APIs:
* node-spotify-api (Spotify)
* axios (BandsInTown and OMDB)
* fs
* moment
* dotenv
  
## Functions
LiriBOT makes use of the following command line arguments to retrieve and display particular types of information:
* **concert-this**: enter a band name after this argument to see a venue and date where the band is playing next
* **spotify-this-song**: enter a song name after this argument to retrieve the artist, album, and other information
* **movie-this**: enter a movie title after this argument to get the movie's year, list of actors, etc.
* **do-what-it-says**: run this command without any additional arguments to retrieve information from a separate text file

## Code
Analyse the liri.js file for code specifics.  LiriBOT uses a switch statement to evaluate user input from the command line and kick off the appropriate function.

The keys.js file holds information on required API keys for Spotify.

To make this application work properly, create a file called .env in the root directory with the following information:
####Spotify API keys

SPOTIFY_ID=your-spotify-id

SPOTIFY_SECRET=your-spotify-secret

## Examples
* $ node liri.js concert-this Muse
* $ node liri.js spotify-this-song Funkytown
* $ node liri.js movie-this Ghostbusters
* $ node liri.js do-what-it-says

The following two screenshots show the outpue for some examples of the various modules included in LiriBOT (note that leaving out the final argument can result in a default value).

![Application Examples](/screenshot1.jpg?raw=true)

![Application Examples](/screenshot2.jpg?raw=true)
