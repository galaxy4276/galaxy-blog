import {Router} from 'express';
import auth from './auth';
import {findUserPosts} from "../api/auth";

const router = Router();

router.use('/@:nickname', findUserPosts);
router.use('/auth', auth);

export default router;