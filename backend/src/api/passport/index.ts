import * as passport from 'passport';
import User from "../../models/user";

export default () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, _done) => {
    await User.findOne({where: { id }})
      .then((user) => console.log(user));
  });
}