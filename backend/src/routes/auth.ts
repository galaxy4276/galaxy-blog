import {Router} from 'express';
import {join, login} from "../api/auth";

const authRouter = Router();

authRouter.post('/join', join);
authRouter.post(
  '/login',
  login
);

export default authRouter; 