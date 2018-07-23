import { check } from 'express-validator/check'

export const validator = [
	check('title').isString(),
	check('content').isString()
]
