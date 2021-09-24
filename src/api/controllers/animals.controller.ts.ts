import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Animal } from '../../entity';

export const list = async (req: Request, res: Response) => {
    const animalsRepository = getRepository(Animal);
    const animals: Array<Animal> = await animalsRepository.find();

    res.send(animals);
};
