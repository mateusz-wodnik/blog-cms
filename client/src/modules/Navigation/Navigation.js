import React from 'react';
import './Navigation.css';
import data from './navigation.data';

const elo = (items, dropdown) => {
	return items.map((item, idx) => {
		return (
			<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={idx}>
				{item.link ?
					<a className="nav__link" href={item.link}>{item.name}</a> : <a className="nav__link" href={`http://localhost:3000/${item.name.trim().replace(' ', '-')}`}>{item.name}</a>}
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
