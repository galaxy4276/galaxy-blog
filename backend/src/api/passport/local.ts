import { Strategy as LocalStrategy } from 'passport-local';
import User from "../../models/user";
import {PassportStatic} from "passport";
import * as bcrypt from 'bcrypt';

export default (passport: PassportStatic) => {
  passport.use(new LocalStrategy({
      usernameField: 'nickname',
      passwordField: 'password',
    },
    async (nickname: string, password: string, done) => {
      const user = await User.findOne({
        where: { nickname }
      });

      if (!user) {
        return done(null, false, {message: '해당 유저가 존재하지 않습니다.'});
      }

      await bcrypt.compare(password, user.password,
        (err: Error, result: boolean) => {
          if (err) throw err;
          if (!result) {
            return done(
              null,
              false,
              { message: '비밀번호가 정확하지 않습니다.' }
            );
          }
          return done(null, user);
        });
    }
  ));
};