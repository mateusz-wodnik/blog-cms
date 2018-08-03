import { Router } from 'express';
import * as ConfigController from '../controllers/config.controller';
import { validator } from './validators/post.validator'
import postImages from './middlewares/postImages'

const router = new Router();

import multer from 'multer'

// Get all Posts
router.route('/images').post(postImages.single('logo'), ConfigController.uploadLogo);
router.route('/menu/:id').put(ConfigController.updateMenuItem);
router.route('/menu').post(ConfigController.addMenuItem);
router.route('/menu').get(ConfigController.getMenuItems);
router.route('/menu/:id').get(ConfigController.getMenuItem);
router.route('/menu/:id').delete(ConfigController.deleteMenuItem);

export default router;
