import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';
import data from './navigation.data';

const elo = (items, dropdown) => {
	return items.map((item, idx) => {
		return (
			<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={idx}>
				{item.link ?
					<Link to={item.link} className="nav__link">{item.name}</Link> :
					<Link to={item.name.trim().replace(' ', '-')} className="nav__link"
					>{item.name}</Link>
				}
				{item.dropdown.length ? elo(item.dropdown, true) : null}
			</div>
		)
	})
}

const Navigation = () => (
	<nav className="blog__nav nav">
		{elo(data)}
	</nav>
)

export default Navigation
