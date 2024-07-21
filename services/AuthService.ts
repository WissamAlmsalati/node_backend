import User, { IUser } from '../models/UserModel';
import jwt from 'jsonwebtoken';

class AuthService {
  async register(userData: Partial<IUser>): Promise<{ user: IUser; token: string }> {
    const user = new User(userData);
    await user.save();
    const token = this.generateToken(user._id.toString());
    return { user, token };
  }

  async login(username: string, password: string): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid username or password');
    }
    const token = this.generateToken(user._id.toString()); 
    return { user, token };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ _id: userId }, 'secretkey', { expiresIn: '1h' });
  }
}

export default new AuthService();
