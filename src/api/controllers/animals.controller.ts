import { Request, Response } from 'express';
import { getRepository, Repository, UpdateResult } from 'typeorm';
import { Animal, Group, Characteristic } from '../../entity';

export default class AnimalController {
    async list(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);
        try {
            const animals: Array<Animal> = await animalsRepository.find({
                relations: ['group', 'characts'],
            });
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
                relations: ['group', 'characts'],
            });

        if (!animalData) {
            return res.status(404).send({ error: 'Animal not found' });
        }
        return res.status(200).send(animalData);
    }

    async create(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);
        const animalData = new Animal();
        const groupData = new Group();

        const { name, age, weight, sex, group, characteristics } = req.body;
        const { name: groupName, scientific_name } = group;

        animalData.name = name;
        animalData.age = age;
        animalData.weight = weight;
        animalData.sex = sex;

        groupData.name = groupName;
        groupData.scientific_name = scientific_name;

        animalData.group = groupData;
        animalData.characts = characteristics as Characteristic[];

        const animalSaved = await animalsRepository.save(animalData);
        return res.status(201).send(animalSaved);
    }

    async update(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);

        const animalData: Animal | undefined =
            await animalsRepository.findOneOrFail({
                where: { id: req.params.animal_id },
                relations: ['group', 'characts'],
            });

        if (!animalData) {
            return res.status(404).send({ error: 'Animal not found' });
        }

        try {
            const result: UpdateResult = await animalsRepository.save({
                ...animalData,
                ...req.body,
            });
            return res.send(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async destroy(req: Request, res: Response) {
        const animalsRepository: Repository<Animal> = getRepository(Animal);
        const { animal_id } = req.params;

        await animalsRepository.delete(parseInt(animal_id));

        return res.sendStatus(204);
    }
}
