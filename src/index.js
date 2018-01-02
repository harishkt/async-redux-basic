import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
/*import { fetchData } from './actions/networkActions'*/
import registerServiceWorker from './registerServiceWorker';
const logger = store => next => action => {
	console.group(action.type);
	console.info(`Dispatching action - ${JSON.stringify(action)}`);
	let result = next(action);
	console.log(`next state is ${JSON.stringify(store.getState())}`);
	console.groupEnd();
	return result;
}
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
