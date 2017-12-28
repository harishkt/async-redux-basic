import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import rootReducer, {currentSearch} from './reducers';
/*import { fetchData } from './actions/networkActions'*/
import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
/*store
	.dispatch(fetchData('reactjs'))
	.then(() => console.log(store.getState()));*/
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
