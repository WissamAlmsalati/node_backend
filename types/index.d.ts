declare namespace Express {
    export interface Request {
      user?: import('../models/UserModel').IUser;
    }
  }
  