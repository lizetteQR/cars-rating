const path = require('path')
const fs = require('fs')
const { map } = require('underscore')

module.exports = (router) => {
	const cars = () =>
		JSON.parse(
			fs.readFileSync(path.resolve(__dirname, '../../data/cars.json'), 'utf8')
		)

	const getCars = (req, res) => {
		return res.status(200).send(cars())
	}
	router.get('/cars', getCars)

	const saveStatusCar = (req, res) => {
		const data = map(cars(), (elem) => {
			if (elem.id === req.body.id) {
				return { ...elem, ...req.body }
			}

			return elem
		})

		fs.writeFileSync(
			path.resolve(__dirname, '../../data/cars.json'),
			JSON.stringify(data)
		)
		return res.status(200).send({ success: true, data: req.body })
	}
	router.post('/saveStatusCar', saveStatusCar)
}
