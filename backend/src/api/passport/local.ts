import { Strategy as LocalStrategy } from 'passport-local';
import User from "../../models/user";
import {PassportStatic} from "passport";
import * as bcrypt from 'bcrypt';

export default (passport: PassportStatic) => {
  passport.use(new LocalStrategy(
    async (nickname, password, done) => {
      const user = await User.findOne({
        where: { nickname }
      });

      console.log('local login user: ', user);

      if (!user) {
        return done(null, false, {message: '해당 유저가 존재하지 않습니다.'});
      }

      const verify = bcrypt.compare(password, user.password,
        (err: Error, result: boolean) => {
        if (err) throw err;
        return result;
      });

      return verify
        ? done(null, user)
        : done(null, false, { message: '비밀번호가 일치하지 않습니다.'});
    }
  ));
};