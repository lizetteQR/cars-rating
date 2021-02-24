import axios from 'axios'

// Action types
import { LIST_CARS, SAVE_STATUS_CAR } from './actionTypes'

export const getCars = () => (dispatch) => {
	return axios
		.get(`${process.env.URL_API}api/cars`)
		.then((res) => {
			dispatch({ type: LIST_CARS, Obj: res.data })
		})
		.catch((error) => {
			throw error
		})
}

export const saveStatusCar = (form) => (dispatch) => {
	return axios
		.post(`${process.env.URL_API}api/saveStatusCar`, form)
		.then((res) => {
			dispatch({ type: SAVE_STATUS_CAR, Obj: res.data })
			return res.data
		})
		.catch((error) => {
			throw error
		})
}
