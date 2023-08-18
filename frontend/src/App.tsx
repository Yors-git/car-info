import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllCars from './components/AllCars';
import CarDetails from './components/CarDetails';
import AddCar from './components/AddCar';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<AllCars />} />
			<Route path='/cars/:id' element={<CarDetails />} />
			<Route path='/add-car' element={<AddCar />} />
		</Routes>
	);
};

export default App;
