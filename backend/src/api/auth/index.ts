import { Request, Response, NextFunction } from 'express';
import User from "../../models/user";
import Post from "../../models/post";

export const findUserPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User | null = await User.findOne({
      where: { nickname: req.params.nickname }
    });

    if (!user) {
      return res.status(404);
    }

    const posts = await Post.findAll({
      where: {
        user_id: user.id,
      },
    });

    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}