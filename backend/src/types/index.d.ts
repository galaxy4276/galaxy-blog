declare namespace Express {
  interface Request {
    user?: import('../models/user').User;
  }
}
