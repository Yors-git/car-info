import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './AddCar.module.css';
import { Car } from '../../models/models';
import { addNewCar } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
  const navigate = useNavigate();
	const [carInfo, setCarInfo] = useState<Car>({
		make: '',
		model: '',
		package: '',
		color: '',
		year: '',
		category: '',
		mileage: '',
		price: ''
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		setCarInfo({
			...carInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addNewCar(carInfo).then(res => console.log(res))
    navigate('/')
	};

	return (
		<Form onSubmit={handleSubmit} className={styles.formContainer}>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Make
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='make'
						onChange={handleChange}
						placeholder='Make'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Model
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='model'
						onChange={handleChange}
						placeholder='Model'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Package
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='package'
						onChange={handleChange}
						placeholder='Package'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Color
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='color'
						onChange={handleChange}
						placeholder='Color'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2' className='justify-content-start'>
					Year
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='year'
						onChange={handleChange}
						placeholder='Year'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Category
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='category'
						onChange={handleChange}
						placeholder='Category'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Mileage
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='mileage'
						onChange={handleChange}
						placeholder='Mileage'
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label column sm='2'>
					Price
				</Form.Label>
				<Col sm='10'>
					<Form.Control
						type='text'
						name='price'
						onChange={handleChange}
						placeholder='Price'
						required
					/>
				</Col>
			</Form.Group>
			<Button type='submit'>Add Car</Button>
		</Form>
	);
};

export default AddCar;
