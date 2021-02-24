import { Modal, Button } from 'react-bootstrap'

const ModalContent = (props) => {
	const { title, onHandleShow, btnLeft, btnRight, disabled } = props
	return (
		<>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={onHandleShow}>
					{btnLeft}
				</Button>
				<Button variant='primary' type='submit' disabled={disabled}>
					{btnRight}
				</Button>
			</Modal.Footer>
		</>
	)
}

export default ModalContent
