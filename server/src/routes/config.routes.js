import { Router } from 'express';
import * as ConfigController from '../controllers/config.controller';
import { validator } from './validators/post.validator'
import postImages from './middlewares/postImages'

const router = new Router();

import multer from 'multer'

// Get all Posts
router.route('/').get(ConfigController.getConfig);

router.route('/menu').post(ConfigController.updateMenu);

router.route('/menu/item').post(ConfigController.addMenuItem);

router.route('/images').post(postImages.single('logo'), ConfigController.uploadLogo);

export default router;

