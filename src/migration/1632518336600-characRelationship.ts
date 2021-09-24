import {MigrationInterface, QueryRunner} from "typeorm";

export class characRelationship1632518336600 implements MigrationInterface {
    name = 'characRelationship1632518336600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characteristic_animals_chars_animal" ("characteristicId" integer NOT NULL, "animalId" integer NOT NULL, CONSTRAINT "PK_f68775d35b95095b5aaf3d4b70f" PRIMARY KEY ("characteristicId", "animalId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d286f1a077e7f938ca012fae39" ON "characteristic_animals_chars_animal" ("characteristicId") `);
        await queryRunner.query(`CREATE INDEX "IDX_205aeea580fdebd1cc89e7003e" ON "characteristic_animals_chars_animal" ("animalId") `);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_chars_animal" ADD CONSTRAINT "FK_d286f1a077e7f938ca012fae39a" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_chars_animal" ADD CONSTRAINT "FK_205aeea580fdebd1cc89e7003e5" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "characteristic_animals_chars_animal" DROP CONSTRAINT "FK_205aeea580fdebd1cc89e7003e5"`);
        await queryRunner.query(`ALTER TABLE "characteristic_animals_chars_animal" DROP CONSTRAINT "FK_d286f1a077e7f938ca012fae39a"`);
        await queryRunner.query(`DROP INDEX "IDX_205aeea580fdebd1cc89e7003e"`);
        await queryRunner.query(`DROP INDEX "IDX_d286f1a077e7f938ca012fae39"`);
        await queryRunner.query(`DROP TABLE "characteristic_animals_chars_animal"`);
    }

}
