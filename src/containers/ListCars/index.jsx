import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import CardElement from '../../components/CardElement'
import FormMaintenance from '../../components/FormMaintenance'
import { Modal } from 'react-bootstrap'
import ModalContent from '../../components/ModalContent'

import { getCars, saveStatusCar } from '../../actions/Cars'

class ListCars extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false,
			idCar: null,
			showConfirmation: false,
		}
	}

	componentDidMount() {
		this.props.getCarsAction()
	}

	onHandleShow = (idCar) => {
		this.setState((currentState) => ({
			...currentState,
			show: !currentState.show,
			idCar,
		}))
	}

	onHandleConfirmation = () => {
		this.setState((currentState) => ({
			...currentState,
			showConfirmation: !currentState.showConfirmation,
		}))

		this.props.getCarsAction()
	}

	onHandleAction = (values) => {
		this.setState((currentState) => ({
			...currentState,
			show: false,
		}))

		const { idCar } = this.state
		const req = {
			...values,
			id: idCar,
			maintenance: true,
		}
		this.props.saveStatusCarAction(req).then((res) => {
			this.setState((currentState) => ({
				...currentState,
				showConfirmation: true,
			}))
		})
	}

	render() {
		const { show, showConfirmation } = this.state
		const { saveStatusCars } = this.props
		return (
			<Container>
				<CardElement
					arrayCars={this.props.carsList}
					onHandleShow={this.onHandleShow}
				/>
				<FormMaintenance
					show={show}
					title='Envar a mantenimiento'
					onHandleShow={this.onHandleShow}
					handleSubmit={this.onHandleAction}
					handleAction={() => {}}
					btnLeft='Cerrar'
					btnRight='Guardar'
					btnType='submit'
				/>

				<Modal show={showConfirmation}>
					<ModalContent
						title='Solicitud Exitosa'
						btnRight={'Entendido'}
						btnType='button'
						handleAction={this.onHandleConfirmation}
					>
						<div>El auto ha sido marcado a mantenimiento.</div>
						{saveStatusCars && saveStatusCars.data && (
							<p>
								ID: <b> {saveStatusCars.data.id} </b>
								<br />
								Fecha estimada de entrega:<b>{saveStatusCars.data.date}</b>
							</p>
						)}
					</ModalContent>
				</Modal>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		carsList: state.cars.get('listCars').toJS(),
		saveStatusCars: state.cars.get('saveStatusCar').toJS(),
	}
}

const mapDispatchToProps = (dispatch) => ({
	getCarsAction: () => dispatch(getCars()),
	saveStatusCarAction: (data) => dispatch(saveStatusCar(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCars)
