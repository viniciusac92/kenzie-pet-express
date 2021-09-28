import { Express } from 'express';
import AnimalsRouter from './animals.router';
import UserRouter from './user.router';

export default (app: Express) => {
    const animalsRouter = AnimalsRouter();
    const userRouter = UserRouter();

    app.use('/api/animals', animalsRouter);
    app.use('/api', userRouter);
};
