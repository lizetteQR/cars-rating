import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'

import ListCars from '../src/containers/ListCars'

// configuring redux store
import configureStore from './store'
const store = configureStore(window.initialState)

function App() {
	return (
		<Provider store={store}>
			<ListCars />
		</Provider>
	)
}

export default App
