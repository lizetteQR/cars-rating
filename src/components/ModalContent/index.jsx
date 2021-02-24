import { Modal, Button } from 'react-bootstrap'

const ModalContent = (props) => {
	const {
		title,
		onHandleShow,
		btnLeft,
		btnRight,
		disabled,
		btnType,
		handleAction,
	} = props
	return (
		<>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			<Modal.Footer>
				{btnLeft && (
					<Button variant='secondary' onClick={onHandleShow}>
						{btnLeft}
					</Button>
				)}
				<Button
					variant='primary'
					type={btnType}
					disabled={disabled}
					onClick={handleAction}
				>
					{btnRight}
				</Button>
			</Modal.Footer>
		</>
	)
}

export default ModalContent
