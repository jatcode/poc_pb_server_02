'use strict';

// recipes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const recipesModel = mongoose.model('recipes', recipesSchema);

module.exports = recipesModel;
