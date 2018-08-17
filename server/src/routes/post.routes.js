import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import { validator } from './validators/post.validator'
import uploadImage from './middlewares/postImages'

const router = new Router();

import multer from 'multer'


// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(uploadImage.single('image'), PostController.addPost);

router.route('/:id').put(uploadImage.single('image'), PostController.updatePost);

router.route('/image').post(uploadImage.single('image'), PostController.uploadPostImage);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

export default router;
