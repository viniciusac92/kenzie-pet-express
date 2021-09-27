import { Router } from 'express';
import AnimalController from '../controllers/animals.controller.ts';

const router = Router();

export default (): Router => {
    const animalController = new AnimalController();
    const { list, retrieve, create, update, destroy } = animalController;

    router.get('/', list);
    router.get('/:animal_id', retrieve);
    router.post('/', create);
    router.put('/:animal_id', update);
    router.delete('/:animal_id', destroy);

    return router;
};
