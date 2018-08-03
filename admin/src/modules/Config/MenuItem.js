import React from 'react'
import { DragSource } from 'react-dnd/lib/index';

const MenuItem = ({ item, connectDragSource }) => connectDragSource(
	<form key={item._id} id={item._id} className="input-group">
		<input type="text"
					 name="name"
					 className="form-control"
					 defaultValue={item.name}
		/>
		<input type="text"
					 name="link"
					 className="form-control"
					 defaultValue={item.link}
					 placeholder="Custom url"
		/>
		<button name="add" className="btn btn-success">✔</button>
		<button onClick={(e) => e.target.form.del = true} name="remove" className="btn btn-danger">✘</button>
	</form>
)

const spec = {
	beginDrag(props) {
		return props;
	},
	endDrag(props) {
		console.log(props)
	}
}

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

export default DragSource('MenuItem', spec, collect)(MenuItem);



