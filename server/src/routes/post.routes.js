import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import { validator } from './validators/post.validator'
// import uploadImage from './middlewares/postImages'

const router = new Router();

import multer from 'multer'
import mkdirp from 'mkdirp'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		mkdirp(`public/images/${req.params.id}`, function (err) {
			if (err) console.error(err)
			cb(null, `public/images/${req.params.id}`)
		});
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

const uploadImage = multer({ storage: storage })



// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(PostController.addPost);

router.route('/:id').put(PostController.updatePost);

router.route('/:id').post(uploadImage.single('image'), PostController.uploadPostImage);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

export default router;
