import multer from 'multer'
import mkdirp from 'mkdirp'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log(req.body)
		mkdirp(`public/images/comments/${req.files['avatar'][0]}`, function (err) {
			if (err) console.error(err)
			cb(null, `public/images/comments/${req.body.username}`)
		});
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

const uploadCommentImage = multer({ storage: storage })

export default uploadCommentImage
