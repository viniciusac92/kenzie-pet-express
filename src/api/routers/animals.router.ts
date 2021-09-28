import { Router } from 'express';
import AnimalController from '../controllers/animals.controller';
import { isSuperUser } from '../middlewares/permission';

const router = Router();

export default (): Router => {
    const animalController = new AnimalController();

    router.get('/', animalController.list);
    router.get('/:animal_id', animalController.retrieve);
    router.post('/', isSuperUser, animalController.create);
    router.put('/:animal_id', isSuperUser, animalController.update);
    router.delete('/:animal_id', isSuperUser, animalController.destroy);

    return router;
};
