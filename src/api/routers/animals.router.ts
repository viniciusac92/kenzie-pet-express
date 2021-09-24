import { Router } from 'express';
import { list } from '../controllers/animals.controller.ts';

const router = Router();

export default () => {
    router.get('/', list);

    return router;
};
