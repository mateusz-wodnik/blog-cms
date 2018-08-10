import multer from 'multer'
import mkdirp from 'mkdirp-promise'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log(file)
		mkdirp(`public/images/comments/`)
			.then(res => cb(null, `public/images/comments/`))
			.catch(console.error)
	},
	filename: function (req, file, cb) {
		const avatar = `${Date.now()}-${file.originalname}`
		req.body.avatar = `/images/comments/${avatar}`
		cb(null, avatar)
	}
})

const uploadCommentImage = multer({ storage: storage })

export default uploadCommentImage
