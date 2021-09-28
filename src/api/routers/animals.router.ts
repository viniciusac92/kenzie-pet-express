import { Router } from 'express';
import AnimalController from '../controllers/animals.controller';
import { isSuperUser } from '../middlewares/permission';
import applyPassportStrategy from '../middlewares/passport';
import passport from 'passport';

const router = Router();

export default (): Router => {
    passport.use(applyPassportStrategy());
    const animalController = new AnimalController();

    router.get(
        '/',
        passport.authenticate('jwt', { session: false }),
        animalController.list,
    );

    router.get(
        '/:animal_id',
        passport.authenticate('jwt', { session: false }),
        animalController.retrieve,
    );

    router.post(
        '/',
        passport.authenticate('jwt', { session: false }),
        isSuperUser,
        animalController.create,
    );

    router.put(
        '/:animal_id',
        passport.authenticate('jwt', { session: false }),
        isSuperUser,
        animalController.update,
    );

    router.delete(
        '/:animal_id',
        passport.authenticate('jwt', { session: false }),
        isSuperUser,
        animalController.destroy,
    );

    return router;
};
