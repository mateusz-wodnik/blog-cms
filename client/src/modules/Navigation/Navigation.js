import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


class Navigation extends Component {
	state = {
		menu: []
	}

	componentDidMount = () => {
		fetch('/api/config')
			.then(res => res.json())
			.then(config => this.setState({menu: config.menu}))
			.catch(console.error)
	}
	
	render = () => (
		<nav className="blog__nav nav">
			<RenderNavigationItems items={this.state.menu} />
		</nav>
	)
}

const RenderNavigationItems = ({items=[], dropdown=[]}) => (
	items.map((item, idx) => (
		<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={idx}>
			{item.link ?
				<Link to={`/categories/${item.link}`} className="nav__link">{item.name}</Link> :
				<Link to={`/categories/${item.name.trim().replace(' ', '-')}`} className="nav__link"
				>{item.name}</Link>
			}
			{item.dropdown.length ? <RenderNavigationItems items={item.dropdown} dropdown={true} /> : null}
		</div>
	))
)

export default Navigation
