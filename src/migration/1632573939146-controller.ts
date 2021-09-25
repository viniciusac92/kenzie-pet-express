import {MigrationInterface, QueryRunner} from "typeorm";

export class controller1632573939146 implements MigrationInterface {
    name = 'controller1632573939146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "is_superuser" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "is_superuser"`);
    }

}
