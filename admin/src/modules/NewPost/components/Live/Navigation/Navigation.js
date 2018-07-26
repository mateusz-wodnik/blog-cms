import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';
import data from './navigation.data';

const elo = (items, dropdown) => {
	return items.map((item, idx) => {
		return (
			<div className={`navigation__item${dropdown ? ` navigation__item--dropdown` : ''}`} key={idx}>
				{item.link ?
					<Link to={item.link} className="navigation__link">{item.name}</Link> :
					<Link to={item.name.trim().replace(' ', '-')} className="navigation__link"
					>{item.name}</Link>
				}
				{item.dropdown.length ? elo(item.dropdown, true) : null}
			</div>
		)
	})
}

const Navigation = () => (
	<nav className="blog__navigation navigation">
		{elo(data)}
	</nav>
)

export default Navigation
