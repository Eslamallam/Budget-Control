import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { firebase } from '../src/firebase/firebase';

const store = configureStore();

const state = store.getState();

const getVisibleData = getVisibleExpenses(state.expenses, state.filters);

console.log(getVisibleData);

const MyApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

const Spinner = () => {
	return (
		<div className="spinner-border" role="status">
			<span className="sr-only">Loading...</span>
		</div>
	);
};

ReactDOM.render(<Spinner />, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(<MyApp />, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log('log in');
	} else {
		console.log('log out');
	}
});

serviceWorker.unregister();
