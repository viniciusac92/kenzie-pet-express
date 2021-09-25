import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Animal, Group, Characteristic } from '../../entity';

export default class AnimalController {
    async list(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);
        try {
            const animals: Array<Animal> = await animalsRepository.find();
            return res.status(200).send(animals);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async retrieve(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);

        const animalData: Animal | undefined =
            await animalsRepository.findOneOrFail({
                where: { id: req.params.animal_id },
                relations: ['group', 'chars'],
            });

        if (!animalData) {
            return res.status(404).send({ error: 'Animal not found' });
        }
        return res.status(200).send(animalData);
    }

    //somente superuser true pode criar
    async create(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);

        const animalData = new Animal();

        const { name, age, weight, sex, group, characteristics } = req.body;
        animalData.name = name;
        animalData.age = age;
        animalData.weight = weight;
        animalData.sex = sex;
        animalData.group = group as Group[];
        animalData.chars = characteristics as Characteristic[];
        try {
            const animalSaved = await animalsRepository.save(animalData);
            return res.status(201).send(animalSaved);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
