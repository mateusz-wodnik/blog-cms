import React from 'react'
import MenuItem from './MenuItem'

const MenuItemWrapper = ({ items, dropdown }) => (
	items.map((item, idx) => (
		<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={item._id}>
			<MenuItem item={item} />
			{item.dropdown.length ?
				<MenuItemWrapper items={item.dropdown} dropdown={true} />
				: null
			}
		</div>
	))
)

export default MenuItemWrapper
