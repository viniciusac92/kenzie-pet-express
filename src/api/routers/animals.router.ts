import { Router } from 'express';
import AnimalController from '../controllers/animals.controller.ts';

const router = Router();

export default (): Router => {
    const animalController = new AnimalController();

    router.get('/', animalController.list);
    router.post('/', animalController.create);

    return router;
};
