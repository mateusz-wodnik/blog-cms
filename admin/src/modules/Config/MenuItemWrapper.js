import React from 'react'
import MenuItem from './MenuItem'
import { DropTarget } from 'react-dnd/lib/index';

const MenuItemWrapper = ({ items, dropdown, connectDropTarget, hovered }) => (
	items.map((item, idx) => connectDropTarget(
		<div className={`nav__item${dropdown ? ` nav__item--dropdown` : ''}`} key={item._id}>
			<MenuItem item={item} />
			{console.log(hovered, item.name)}
			{item.dropdown.length ?
				<MenuItemWrapper
					items={item.dropdown}
					dropdown={true}
					connectDropTarget={connectDropTarget}
				/>
				: null
			}
		</div>
	))
)

const target = 'MenuItem'

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		isOverCurrent: monitor.isOver({ shallow: true }),
		item: monitor.getItem(),
	}
}

const spec = {
	hover(props) {
		// console.log(props)
	},
	drop(props, monitor) {
		console.log(props, monitor.getItem())
	}
}


export default DropTarget(target, spec, collect)(MenuItemWrapper)
