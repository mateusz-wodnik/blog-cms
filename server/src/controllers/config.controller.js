import Config from '../models/config'


export function uploadLogo(req, res) {
	console.log('POST upload logo')
	res.json(`/images/${req.file.originalname}`)
}

export function updateMenu(req, res) {
	console.log('POST update config menu')
	Config.update(
		{},
		{menu: req.body},
		{multi: true, upsert: true}
	)
		.then(updated => res.send(updated))
		.catch(err => res.send(err))
}

export function getConfig(req, res) {
	console.log('GET config')
	Config.find()
		.then(configs => {
			console.log(configs)
			res.send(configs[0])
		})
}