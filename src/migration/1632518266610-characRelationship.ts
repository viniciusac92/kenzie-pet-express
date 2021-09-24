import {MigrationInterface, QueryRunner} from "typeorm";

export class characRelationship1632518266610 implements MigrationInterface {
    name = 'characRelationship1632518266610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characteristic_animals_animal" ("characteristicId" integer NOT NULL, "animalId" integer NOT NULL, CONSTRAINT "PK_e62b2c30791a07e5915f6ad3ab2" PRIMARY KEY ("characteristicId", "animalId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7f4b0da947799258fcbbdb35b0" ON "characteristic_animals_animal" ("characteristicId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e704143ba19179c951e25386f4" ON "characteristic_animals_animal" ("animalId") `);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_animal" ADD CONSTRAINT "FK_7f4b0da947799258fcbbdb35b05" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_animal" ADD CONSTRAINT "FK_e704143ba19179c951e25386f42" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "characteristic_animals_animal" DROP CONSTRAINT "FK_e704143ba19179c951e25386f42"`);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_animal" DROP CONSTRAINT "FK_7f4b0da947799258fcbbdb35b05"`);
        await queryRunner.query(`DROP INDEX "IDX_e704143ba19179c951e25386f4"`);
        await queryRunner.query(`DROP INDEX "IDX_7f4b0da947799258fcbbdb35b0"`);
        await queryRunner.query(`DROP TABLE "characteristic_animals_animal"`);
    }

}
