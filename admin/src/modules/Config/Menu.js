import React from 'react'
import './Menu.css'

const Menu = ({children, handleAddMenuItem}) => (
	<section className="config__menu menu">
		<h2>Configure menu</h2>
		<form className="menu__new input-group" onSubmit={handleAddMenuItem} >
			<input className="menu__name form-control" type="text" name="name" placeholder="name" />
			<input className="menu__link form-control" type="text" name="link" placeholder="link" />
			<div className="input-group-append">
				<button className="menu__add btn btn-success">Add</button>
			</div>
		</form>
		{children}
	</section>
)

export default Menu