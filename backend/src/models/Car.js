const mongoose = require('mongoose')

const carScheema = new mongoose.Schema({
  _id: String,
  make: String,
  model: String,
  package: String,
  color: String,
  year: String,
  category: String,
  mileage: String,
  price: String,
})

mongoose.model('Car', carScheema)