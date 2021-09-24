import {MigrationInterface, QueryRunner} from "typeorm";

export class cha1632520323756 implements MigrationInterface {
    name = 'cha1632520323756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characteristic" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_88f998ec743440a5c758e08ece4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "scientific_name" character varying NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "weight" integer NOT NULL, "sex" character varying NOT NULL, "groupId" integer, CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animal_chars_characteristic" ("animalId" integer NOT NULL, "characteristicId" integer NOT NULL, CONSTRAINT "PK_db50cb3dd3dd47d7bf75029ae63" PRIMARY KEY ("animalId", "characteristicId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7d428777c79494b7356119a457" ON "animal_chars_characteristic" ("animalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6118462131f20eb8ddac4c1111" ON "animal_chars_characteristic" ("characteristicId") `);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animal_chars_characteristic" ADD CONSTRAINT "FK_7d428777c79494b7356119a4579" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "animal_chars_characteristic" ADD CONSTRAINT "FK_6118462131f20eb8ddac4c11117" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal_chars_characteristic" DROP CONSTRAINT "FK_6118462131f20eb8ddac4c11117"`);
        await queryRunner.query(`ALTER TABLE "animal_chars_characteristic" DROP CONSTRAINT "FK_7d428777c79494b7356119a4579"`);
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1"`);
        await queryRunner.query(`DROP INDEX "IDX_6118462131f20eb8ddac4c1111"`);
        await queryRunner.query(`DROP INDEX "IDX_7d428777c79494b7356119a457"`);
        await queryRunner.query(`DROP TABLE "animal_chars_characteristic"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "animal"`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "characteristic"`);
    }

}
