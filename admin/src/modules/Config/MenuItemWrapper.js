import React from 'react'
import MenuItem from './MenuItem'
import { DropTarget } from 'react-dnd/lib/index';

const MenuItemWrapper = ({ items, dropdown, connectDropTarget, hovered }) => (
	items.map((item, idx) => connectDropTarget(
		<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={item._id}>
			<MenuItem item={item} />
			{item.dropdown.length ?
				<MenuItemWrapper items={item.dropdown} dropdown={true} connectDropTarget={connectDropTarget} />
				: null
			}
		</div>
	))
)

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		item: monitor.getItem(),
	}
}

const spec = {
	drop(props, monitor) {
		console.log(props, monitor.getItem())
	}
}


export default DropTarget('MenuItem', spec, collect)(MenuItemWrapper)
