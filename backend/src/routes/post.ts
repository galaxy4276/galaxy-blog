import {Router} from 'express';
import {getPost, patchPost, post, deletePost} from "../api/post";


const postRouter = Router();

postRouter.post('/', post);
postRouter.get('/:id', getPost);
postRouter.patch('/:id', patchPost);
postRouter.delete('/:id', deletePost);


export default postRouter;