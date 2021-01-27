import {Router} from 'express';
import {findUserPosts} from "../api/auth";

const authRouter = Router();

authRouter.get('/@:nickname', findUserPosts);

export default authRouter; 