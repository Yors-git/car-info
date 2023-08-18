require('./models/Car');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	next();
});

app.use('/', carRoutes);

const mongoURI =
	'mongodb+srv://jatbribiesca:Arturo2015@cars.epf9uor.mongodb.net/carsDatabase?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
	console.log('Connected to Mongo');
});

mongoose.connection.on('Error', err => {
	console.log('Error connecting to Mongo', err);
});

app.listen(3000, () => {
	console.log('Listenting on port 3000');
});
