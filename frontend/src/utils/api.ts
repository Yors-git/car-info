import axios from 'axios';
import { Car } from '../models/models';

const baseUrl = 'http://localhost:3000/cars';

export const getAllCars = async () => {
	try {
		const res = await axios.get(baseUrl);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const addNewCar = async (payload: Car) => {
	try {
		const res = await axios.post(baseUrl, payload);
    console.log('RES', res)
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getCarById = async (id: string) => {
	try {
		const res = await axios.get(`${baseUrl}/${id}`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
