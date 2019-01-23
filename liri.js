// require dotenv package to set environment variables
require("dotenv").config();

const Spotify = require('node-spotify-api');

// import spotify keys from keys.js
const keys = require("./keys.js");

// const to access keys
const spotify = new Spotify(keys.spotify);

// take in spotify-this-song command
const spotify-this-song = process.argv[3];