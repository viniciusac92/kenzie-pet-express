import { Request } from 'express';
import { Animal, Group, Characteristic } from '../entity';

export const buildAnimal = (animal: Request) => {
    const { name, age, weight, sex, group, characteristics } = animal.body;
    const { name: groupName, scientific_name } = group;

    const animalData = new Animal();
    const groupData = new Group();

    animalData.name = name;
    animalData.age = age;
    animalData.weight = weight;
    animalData.sex = sex;

    groupData.name = groupName;
    groupData.scientific_name = scientific_name;

    animalData.group = groupData;
    animalData.characts = characteristics as Characteristic[];

    return animalData;
};
