// import Config from '../models/config';


export function uploadLogo(req, res) {
	console.log('POST upload logo')
	res.json(`/images/${req.file.originalname}`)
}
