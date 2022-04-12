import { Router } from 'express';
const router = Router();

import { signup, signin } from '../controllers/auth'
import { TokenValidation } from '../libs/verifyToken'
import { CreateComments } from '../controllers/comments'

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/comments/create', TokenValidation, CreateComments )


export default router;
