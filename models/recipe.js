var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecipeSchema = new Schema(
  {
    title: {type: String, required: false, max:50},
    url: {type: String, required: false, max:2000},
    ingredients: [{type: String}],
    methodSteps: [{type: String}]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
