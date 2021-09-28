import { Express } from 'express';
import AnimalsRouter from './animals.router';
import UserRouter from './user.router';

import applyPassportStrategy from '../middlewares/passport';
import passport from 'passport';

export default (app: Express) => {
    passport.use(applyPassportStrategy());
    const animalsRouter = AnimalsRouter();
    const userRouter = UserRouter();

    app.use(
        '/api/animals',
        passport.authenticate('jwt', { session: false }),
        animalsRouter,
    );
    app.use('/api', userRouter);
};
