import { Router } from 'express';
import * as ConfigController from '../controllers/config.controller';
import { validator } from './validators/post.validator'
import postImages from './middlewares/postImages'

const router = new Router();

import multer from 'multer'

// Get all Posts
router.route('/').post(postImages.single('logo'), ConfigController.uploadLogo);

export default router;
