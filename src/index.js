import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import * as serviceWorker from './serviceWorker';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { firebase } from '../src/firebase/firebase';
import { login, logout } from './actions/auth';

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

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(<MyApp />, document.getElementById('root'));
		hasRendered = true;
	}
};

ReactDOM.render(<Spinner />, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		renderApp();
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		renderApp();
		store.dispatch(logout());
		history.push('/');
	}
});

serviceWorker.unregister();
