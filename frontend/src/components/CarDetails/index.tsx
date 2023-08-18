import { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Car } from '../../models/models';
import { getCarById } from '../../utils/api';
import styles from './CarDetails.module.css';

const CarDetails = () => {
	const { id } = useParams();
	const [car, setCar] = useState<Car>();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		if (id) {
			getCarById(id).then(res => {
				setCar(res);
				setLoading(false);
			});
		}
	}, [id]);

	if (loading)
		return (
			<div className={styles.spinner}>
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</div>
		);

	return (
		<>
			<ListGroup>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Make: <span className='fw-normal'>{car?.make}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Model: <span className='fw-normal'>{car?.model}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Package: <span className='fw-normal'>{car?.package}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Color: <span className='fw-normal'>{car?.color}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Year: <span className='fw-normal'>{car?.year}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Category: <span className='fw-normal'>{car?.category}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Mileage: <span className='fw-normal'>{car?.mileage}</span>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item className='d-flex justify-content-between align-items-start'>
					<div className='ms-1 me-auto'>
						<div className='fw-bold'>
							Price: <span className='fw-normal'>{car?.price}</span>
						</div>
					</div>
				</ListGroup.Item>
			</ListGroup>
			<Link to={-1 as any}>Back</Link>
		</>
	);
};

export default CarDetails;
