import { Request, Response } from 'express';
import authService from '../services/AuthService';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const result = await authService.register(req.body);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
      } else {
        res.status(400).send({ error: 'An unexpected error occurred' });
      }
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const result = await authService.login(username, password);
      res.send(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
      } else {
        res.status(400).send({ error: 'An unexpected error occurred' });
      }
    }
  }
}

export default new AuthController();
