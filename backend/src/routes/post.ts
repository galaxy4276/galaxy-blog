import {Router} from 'express';
import {getPost, post} from "../api/post";


const postRouter = Router();

postRouter.post('/', post);
postRouter.get('/:id', getPost);


export default postRouter;