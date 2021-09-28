import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/passport';

import { User } from '../../entity';

export default class AuthController {
    async login(req: Request, res: Response) {
        const repository = getRepository(User);
        const { username, password } = req.body;
        const user = await repository.findOne({ where: { username } });
        if (!user) {
            return res.status(401).send({ message: 'Invalid username!' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid password!' });
        }

        const token = jwt.sign({ username: user.username }, config.secret, {
            expiresIn: config.expiresIn,
        });

        return res.status(200).send({ token });
    }
}
