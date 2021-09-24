import { Express } from 'express';
import AnimalsRouter from './animals.router';

export default (app: Express) => {
    const animalsRouter = AnimalsRouter();

    app.use('/api/animals', animalsRouter);
};
