import {MigrationInterface, QueryRunner} from "typeorm";

export class entities1632512227238 implements MigrationInterface {
    name = 'entities1632512227238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "weight" integer NOT NULL, "sex" character varying NOT NULL, CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "characteristic" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_88f998ec743440a5c758e08ece4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "scientific_name" character varying NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "characteristic"`);
        await queryRunner.query(`DROP TABLE "animal"`);
    }

}
