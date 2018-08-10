import MenuItem from '../models/menuItem';
import Config from '../models/config'


export function uploadLogo(req, res) {
	console.log('POST upload logo')
	res.json(`/images/${req.file.originalname}`)
}

export function updateMenuItem(req, res) {
	const body = req.body
	let update = body
	if(req.query.add) {
		update = { body, $addToSet: { dropdown: req.body._id } }
	} else if (req.query.remove) {
		update = { body, $pull: { dropdown: req.body._id } }
	}
	MenuItem.update(
		{ _id: req.params.id },
		update
	)
		.then(updated => {
			if(req.query.add) {
				MenuItem.update(
					{ _id: req.body._id },
					{ top: false }
				)
					.then(updated => console.log(updated))
					.catch(console.error)
			}
			res.send(updated)
		})
		.catch(console.error)
}

export function addMenuItem(req, res) {
	console.log("POST new menu item")
	const id = req.params.id
	MenuItem.create(req.body)
		.then(item => {
			if(id) {
				MenuItem.update(
					{_id: id},
					{$addToSet: {dropdown: item._id}}
				)
					.then(res => console.log(res))
					.catch(console.error)
			}
			res.send(item)
		})
		.catch(console.error)
}

export function getMenuItems(req, res) {
	const query = {}
	if(req.query.top) {
		req.query.top === 'true' ? query.top = true : query.top = false
	} else if (req.query.active) {
		req.query.active === 'true' ? query.active = true : query.active = false
	}
	MenuItem.find(query)
		.then(items => res.send(items))
		.catch(console.error)
}

export function getMenuItem(req, res) {
	MenuItem.find({_id: req.params.id})
		.then(items => res.send(items))
		.catch(console.error)
}

export function deleteMenuItem(req, res) {
	MenuItem.remove({_id: req.params.id})
		.then(removed => res.send(removed))
		.catch(console.error)
}

export function getConfig(req, res) {
	Config.find({})
		.then(config => res.send(config))
		.catch(console.error)
}

export function updateConfig(req, res) {
	const id = req.params.id
	Config.update(
		{_id: id},
		req.body,
		{ upsert : true }
	)
		.then(config => res.send(config))
		.catch(console.error)
}
