import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entity';

export default class UserController {
    async create(req: Request, res: Response) {
        const repository = getRepository(User);
        const { username, password, is_superuser } = req.body;
        const userExists = await repository.findOne({ where: { username } });
        if (userExists) {
            return res
                .status(409)
                .send({ message: 'Username already exists!' });
        }

        const user = repository.create({ username, password, is_superuser });
        await repository.save(user);
        return res.status(201).send(user);
    }
}
