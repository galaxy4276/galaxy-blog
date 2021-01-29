import { Request, Response, NextFunction } from 'express';
import User from "../../models/user";
import Post from "../../models/post";
import * as Joi from 'joi';
import * as passport from 'passport';
import {genSaltAndPassword} from "../../loaders";


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

// todo: Validation 수정과 비밀번호 이슈 해결 필요
export const join = async (req: Request, res: Response, next: NextFunction) => {
  const { nickname, password, email } = req.body;
  const schema = Joi.object({
    nickname: Joi.string()
      .alphanum()
      .trim(),
    password: Joi.string()
      .trim()
      .pattern(/[!@#$%^&*][A-Z]\w*$/, 'password'),
    email: Joi.string().email(),
  });

  const result = schema.validate({ nickname, password, email });

  if (result.error) {
    console.table([
      {name: '사용자 회원가입 Validation 오류', message: result.error.message}
    ]);
    return res.status(400).send(result.error.message);
  }

  try {
    const exUser = await User.findOne({
      where: { nickname }
    });

    if (exUser) {
      return res.status(401).json({ message: '이미 존재하는 유저입니다.' });
    }

    await User.create({
      nickname,
      password: await genSaltAndPassword(password),
      email,
    }).then((user: User) => console.log(user.nickname + ' 사용자가 생성되었습니다.'));

    return res.status(200).send('ok');
  } catch (e) {
    console.error(e);
    return next(e);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  passport.authenticate('local', (err: Error, user, info) => {
    if (err) { return next(err); }
    // test
    if (info) console.log('info: ', info);
    user ? console.log(user) : console.log('user 없음.');
    res.send(user);
  })(req, res, next);
}