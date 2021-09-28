import { Router } from 'express';
import UserController from '../controllers/user.controller';
import AuthController from '../controllers/auth.controller';

const router = Router();

export default (): Router => {
    const userController = new UserController();
    const authController = new AuthController();

    router.post('/user', userController.create);
    router.post('/login', authController.login);

    return router;
};
