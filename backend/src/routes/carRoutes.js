const express = require('express');
const mongoose = require('mongoose');
const Car = mongoose.model('Car');

const router = express.Router();

router.get('/cars', async (req, res) => {
	const cars = await Car.find({});
	res.send(cars);
});

router.post('/cars', async (req, res) => {
	const { make, model, package, color, year, category, mileage, price } =
		req.body;

	if (!make || !model || !year || !price) {
		return res
			.status(422)
			.send({
				error: 'You must provide at least: make, model, year and price'
			});
	}

	try {
		const car = new Car({
			_id: new mongoose.Types.ObjectId(),
			make,
			model,
			package,
			color,
			year,
			category,
			mileage,
			price
		});
		await car.save();
		res.send('Car successfully added');
	} catch (error) {
		res.status(422).send({ error: error.message });
	}
});

router.get('/cars/:id', async (req, res) => {

	try {
		let foundCar = await Car.findById(req.params.id).exec();
		if (!foundCar) {
			res.status(404).json({ error: 'Car NOT FOUND' });
		} else {
			res.json(foundCar);
		}
	} catch (err) {
		res.status(500).json({ error: 'Something went wrong' });
	}
});

module.exports = router;
