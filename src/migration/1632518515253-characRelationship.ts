import {MigrationInterface, QueryRunner} from "typeorm";

export class characRelationship1632518515253 implements MigrationInterface {
    name = 'characRelationship1632518515253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animal_characteristics_characteristic" ("animalId" integer NOT NULL, "characteristicId" integer NOT NULL, CONSTRAINT "PK_aac20362fded6834649b5ca1cb3" PRIMARY KEY ("animalId", "characteristicId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a7c8724a03670ddb68025b2e10" ON "animal_characteristics_characteristic" ("animalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_980da0ee151bb3ced85b6b797a" ON "animal_characteristics_characteristic" ("characteristicId") `);
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD "groupId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animal_characteristics_characteristic" ADD CONSTRAINT "FK_a7c8724a03670ddb68025b2e102" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "animal_characteristics_characteristic" ADD CONSTRAINT "FK_980da0ee151bb3ced85b6b797a4" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal_characteristics_characteristic" DROP CONSTRAINT "FK_980da0ee151bb3ced85b6b797a4"`);
        await queryRunner.query(`ALTER TABLE "animal_characteristics_characteristic" DROP CONSTRAINT "FK_a7c8724a03670ddb68025b2e102"`);
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1"`);
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP COLUMN "groupId"`);
        await queryRunner.query(`DROP INDEX "IDX_980da0ee151bb3ced85b6b797a"`);
        await queryRunner.query(`DROP INDEX "IDX_a7c8724a03670ddb68025b2e10"`);
        await queryRunner.query(`DROP TABLE "animal_characteristics_characteristic"`);
    }

}
