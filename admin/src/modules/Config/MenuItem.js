import React from 'react'


const MenuItem = ({ item }) => (
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

export default MenuItem
