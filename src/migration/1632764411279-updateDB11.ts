import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDB111632764411279 implements MigrationInterface {
    name = 'updateDB111632764411279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characteristic" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_88f998ec743440a5c758e08ece4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "scientific_name" character varying NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "weight" integer NOT NULL, "sex" character varying NOT NULL, "groupId" integer, CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "is_superuser" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animal_characts_characteristic" ("animalId" integer NOT NULL, "characteristicId" integer NOT NULL, CONSTRAINT "PK_52539ce87c7d33c88443872da1b" PRIMARY KEY ("animalId", "characteristicId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_922a41dd9485c62628578e9665" ON "animal_characts_characteristic" ("animalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cccbd4d4ccced6d1c95543c6dc" ON "animal_characts_characteristic" ("characteristicId") `);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animal_characts_characteristic" ADD CONSTRAINT "FK_922a41dd9485c62628578e9665f" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "animal_characts_characteristic" ADD CONSTRAINT "FK_cccbd4d4ccced6d1c95543c6dcd" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal_characts_characteristic" DROP CONSTRAINT "FK_cccbd4d4ccced6d1c95543c6dcd"`);
        await queryRunner.query(`ALTER TABLE "animal_characts_characteristic" DROP CONSTRAINT "FK_922a41dd9485c62628578e9665f"`);
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1"`);
        await queryRunner.query(`DROP INDEX "IDX_cccbd4d4ccced6d1c95543c6dc"`);
        await queryRunner.query(`DROP INDEX "IDX_922a41dd9485c62628578e9665"`);
        await queryRunner.query(`DROP TABLE "animal_characts_characteristic"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "animal"`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "characteristic"`);
    }

}
