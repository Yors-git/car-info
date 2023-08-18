import { useEffect, useState } from 'react';
import { Car } from '../../models/models';
import { getAllCars } from '../../utils/api';
import CarList from '../CarList';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AllCars = () => {
	const [carList, setCarList] = useState<Car[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		getAllCars().then(res => {
			setCarList(res);
			setLoading(false);
		});
	}, []);

	return (
		<>
      <h1>My Cars</h1>
			<CarList cars={carList} loading={loading} />
			<Button className='mb-4 mt-3' onClick={() => navigate('/add-car')}>Add Car</Button>
		</>
	);
};

export default AllCars;
