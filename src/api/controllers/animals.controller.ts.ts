import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Animal, Group, Characteristic } from '../../entity';
import { groupService } from '../../services';

export default class AnimalController {
    async list(req: Request, res: Response) {
        const animalsRepository = getRepository(Animal);
        try {
            const animals: Array<Animal> = await animalsRepository.find();
            return res.status(200).send(animals);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    create = async (req: Request, res: Response) => {
        const animalsRepository = getRepository(Animal);
        const groupRepository = getRepository(Group);
        const characRepository = getRepository(Characteristic);

        const { name, age, weight, sex, group, characteristics } = req.body;

        const groupData = groupService(group);
    };
}
