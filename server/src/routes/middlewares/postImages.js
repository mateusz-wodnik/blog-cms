import multer from 'multer'
import mkdirp from 'mkdirp'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		mkdirp(`public/images`, function (err) {
			if (err) console.error(err)
			cb(null, `public/images`)
		});
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

const uploadImage = multer({ storage: storage })

export default uploadImage
