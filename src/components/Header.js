import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<h1>Header</h1>
			<NavLink to="/" activeClassName="is-active" exact={true}>
				Dashboard
			</NavLink>
			<NavLink to="/create" activeClassName="is-active">
				Create Expenses
			</NavLink>
			<NavLink to="/edit" activeClassName="is-active">
				Edit Expenses
			</NavLink>
			<NavLink to="/help" activeClassName="is-active">
				Help
			</NavLink>
		</div>
	);
};

export default Header;