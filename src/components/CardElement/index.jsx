import { Button, CardGroup, Card, Row, Col } from 'react-bootstrap'

const CardElement = ({ arrayCars, onHandleShow }) => {
	return (
		<CardGroup>
			<Row className='justify-content-md-center'>
				{arrayCars.length ? (
					arrayCars.map((elem) => (
						<Col md='4' className='mb-1' key={elem.id}>
							<Card
								bg={elem.maintenance ? 'warning' : 'light'}
								style={{ width: '18rem' }}
							>
								<div
									style={{
										height: '11.25rem',
										width: '18rem',
										backgroundColor: '#dedede',
									}}
								>
									<Card.Img
										style={{
											height: '100%',
											width: '100%',
											objectFit: 'cover',
										}}
										variant='top'
										src={elem.image}
									/>
								</div>
								<Card.Body>
									<div>
										<div>
											ID: <b>{elem.id}</b>
										</div>
										<div>
											Marca: <b>{elem.make}</b>
										</div>
										<div>
											Modelo: <b>{elem.model}</b>
										</div>
										<div>
											Kilomatraje actual: <b>{elem.km}</b>
										</div>
										<div style={{ height: '60px' }}>
											Descripción: <b>{elem.description}</b>
										</div>
									</div>
									<Button
										variant='outline-dark'
										onClick={() => onHandleShow(elem.id)}
										disabled={elem.maintenance}
										style={{ float: 'right' }}
									>
										Mantenimiento
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<div>no data</div>
				)}
			</Row>
		</CardGroup>
	)
}

export default CardElement
