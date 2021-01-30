import {Router} from 'express';
import auth from './auth';
import {findUserPosts} from "../api/auth";
import post from "./post";

const router = Router();

router.use('/@:nickname', findUserPosts);
router.use('/auth', auth);
router.use('/post', post);

export default router;