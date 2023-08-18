import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Spinner } from 'react-bootstrap';
import styles from './CarsList.module.css';
import { Car } from '../../models/models';
import { Link } from 'react-router-dom';

interface IPhotosListProps {
	cars: Car[];
	loading: boolean;
}

const CarsList: React.FC<IPhotosListProps> = ({ cars, loading }) => {
	if (loading)
		return (
			<div className={styles.spinner}>
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</div>
		);

	return (
		<div className={`mt-2`}>
			<Row xs={1} md={2} className='g-2 justify-content-center d-flex flex-wrap p-2 mx-2'>
				{cars.length > 0 ? (
					cars.map((car: Car) => (
            <div key={car._id} className='col-lg-2 col-md-6 col-sm-10 mt-4'>
						<Card
							className={`${styles.card}`}
						>
							<Card.Body className='px-0'>
								<Card.Title>{car.make} {car.model}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Year: {car.year} 
								</Card.Subtitle>
								<Card.Subtitle className='mb-2 text-muted'>
									Color: {car.color} 
								</Card.Subtitle>
                <Link to={`/cars/${car._id}`}>
									See Full Info
								</Link>
							</Card.Body>
						</Card>
            </div>
					))
				) : (
					<h1 className='text-center mt-5'>No cars to show</h1>
				)}
			</Row>
		</div>
	);
};

export default CarsList;
