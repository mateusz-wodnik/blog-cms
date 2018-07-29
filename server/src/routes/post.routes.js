import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import { validator } from './validators/post.validator'
import uploadImage from './middlewares/postImages'

const router = new Router();


// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(PostController.addPost);

router.route('/:id').put(PostController.updatePost);

router.route('/:id').post(uploadImage, PostController.uploadPostImage);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

export default router;
