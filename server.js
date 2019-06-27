const express = require('express');
const app = express();
const fetch = require('node-fetch');
const routes = require('./api/routes/index')
app.use('/api',require('./api/routes/index'));
var cheerio = require('cheerio');


const getRecipe = () => {
  const url = 'https://www.bbcgoodfood.com/recipes/1507676/griddled-courgette-and-seafood-lasagne'
  fetch(url)
    .then(response => response.text())
    .then(body => {
      findIngredients(body);
      findMethod(body);
    });
}

function findIngredients(html) {
  const $ = cheerio.load(html);
  var ingredients = [];
  $('li[class=ingredients-list__item]').each(function () {
    ingredients.push($(this).attr('content'));
  });
  console.log(ingredients);
}

function findMethod(html) {
  const $ = cheerio.load(html);
  var methodSteps = [];
  $('li[class=method__item]').children('p').each(function () {
    methodSteps.push($(this).text());
  });


  //var we = $('li[class=method__item]').children('p').text();

  console.log(methodSteps);
}

getRecipe();

app.listen(process.env.port || 3500, function() {
    console.log("Now listening for requests");
});
