// configure dotenv, require all packages and files
require("dotenv").config();

const keys = require("./keys.js");

const Spotify = require('node-spotify-api');

const axios = require('axios');

const moment = require('moment');


// take in all command line arguments
const inputString = process.argv;

// capture specific command and execute appropriate operation
const command = process.argv[2];

// const operation;

if (command === 'spotify-this-song') {
    // access spotify keys
    const spotify = new Spotify(keys.spotify);

    // search query for a song
    const song = process.argv[3];
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
} 
// else if (command === 'concert-this')