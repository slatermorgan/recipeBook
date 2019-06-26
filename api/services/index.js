const cheerio = require('cheerio')
const express = require('express');
const axios = require('axios')

axios.get('http://www.ebizmba.com/articles/recipe-websites')

.then(function (response) {

// handle success

//console.log(response);

})

.catch(function (error) {

// handle error

console.log(error);

})

.then(function () {

// always executed

});
