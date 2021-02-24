import { Formik, Form, Field } from 'formik'
import InputField from '../commons/InputField'
import ModalContent from '../ModalContent'
import { Modal } from 'react-bootstrap'
import Message from '../Message'
import * as Yup from 'yup'

const FormMaintenance = (props) => {
	const { show, title, onHandleShow, handleAction, btnLeft, btnRight } = props

	const schema = Yup.object({
		name: Yup.string().required('Por favor ingresa tu nombre'),
		lastName: Yup.string().required('Por favor ingresa tu apellido'),
		date: Yup.date()
			.required('Por favor ingresa fecha estimada de entrega')
			.min(new Date(), 'Ingrese una fecha válida'),
	})

	return (
		<Modal show={show} onHide={onHandleShow}>
			<Formik
				initialValues={{
					name: '',
					lastName: '',
					date: '',
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					console.log(values)
					handleAction(values)
				}}
			>
				{({ dirty }) => (
					<Form id='form-formik'>
						<ModalContent
							title={title}
							onHandleShow={onHandleShow}
							btnLeft={btnLeft}
							btnRight={btnRight}
							disabled={!dirty}
						>
							<Field name='name'>
								{({ field, meta }) => (
									<div>
										<InputField
											type='text'
											placeholder='Nombre'
											label='Nombre'
											{...field}
										/>
										{meta.touched && meta.error && (
											<Message message={meta.error} />
										)}
									</div>
								)}
							</Field>
							<Field name='lastName'>
								{({ field, meta }) => (
									<div>
										<InputField
											type='text'
											placeholder='Apellidos'
											label='Apellidos'
											{...field}
										/>
										{meta.touched && meta.error && (
											<Message message={meta.error} />
										)}
									</div>
								)}
							</Field>
							<Field name='date'>
								{({ field, meta }) => (
									<div>
										<InputField
											type='date'
											placeholder='Fecha estimada de entrega'
											label='Fecha estimada de entreda'
											{...field}
										/>
										{meta.touched && meta.error && (
											<Message message={meta.error} />
										)}
									</div>
								)}
							</Field>
						</ModalContent>
					</Form>
				)}
			</Formik>
		</Modal>
	)
}

export default FormMaintenance
