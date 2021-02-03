import {Router} from 'express';
import {join, login, logout} from "../api/auth";

const authRouter = Router();

authRouter.post('/join', join);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

export default authRouter; 