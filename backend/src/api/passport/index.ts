import * as passport from 'passport';
import User from "../../models/user";
import local from "./local";

export default () => {
  console.log('serializeUser');
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    console.log('deserializeUser');
    const user = await User.findOne({where: {id}});
    if (user) {
      done(null, user);
    }
  });

  local(passport);
}