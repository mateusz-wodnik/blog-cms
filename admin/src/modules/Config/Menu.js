import React from 'react'
import MenuItem from './MenuItem'
import MenuItemWrapper from './MenuItemWrapper'
import { DragDropContext } from 'react-dnd/lib/index';
import HTML5Backend from 'react-dnd-html5-backend/lib/index';

const Menu = ({ data=[], handleMenu, handleNewMenuItem, items=[] }) => (
	<div onSubmit={handleMenu} className="config__menu menu">
		<form id="addNewMenuItem" className="menu__add">
			<div className="input-group">
				<input name="name" type="text" className="form-control" placeholder="Name" />
				<input name="link" type="text" className="form-control" placeholder="Custom link" />
				<button onClick={handleNewMenuItem} className="btn btn-success" style={{fontWeight: 900}}>＋</button>
			</div>
		</form>
		<div className="menu__items">
			{items.map(item =>
				<MenuItem key={item._id} item={item} />
			)}
		</div>
		<div className="menu__list form-group">
			<MenuItemWrapper items={data} dropdown={false} />
			<button className="btn btn-success">save</button>
		</div>
	</div>
)

export default DragDropContext(HTML5Backend)(Menu)


