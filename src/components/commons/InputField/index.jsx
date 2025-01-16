import { Form } from 'react-bootstrap'
const InputField = ({ id, type, label, placeholder, ...rest }) => {
	return (
		<Form.Group controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} {...rest} />
		</Form.Group>
	)
}

export default InputField
