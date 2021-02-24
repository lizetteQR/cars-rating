import { Map, List } from 'immutable'

// Action Types
import { LIST_CARS, SAVE_STATUS_CAR } from '../../actions/Cars/actionTypes.js'

// Initial State
const initialState = Map({})
	.set('listCars', new List([]))
	.set('saveStatusCar', new Map({}))

export default function carsReducer(state, action) {
	if (!state) {
		// eslint-disable-next-line no-param-reassign
		state = initialState
	}

	if (action.type === LIST_CARS) {
		return state.set('listCars', new List(action.Obj))
	}
	if (action.type === SAVE_STATUS_CAR) {
		return state.set('saveStatusCar', new Map(action.Obj))
	}
	return state
}
