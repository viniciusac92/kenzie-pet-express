import {MigrationInterface, QueryRunner} from "typeorm";

export class groupRelationship1632517650889 implements MigrationInterface {
    name = 'groupRelationship1632517650889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD "groupId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP CONSTRAINT "FK_1579543be06f244b0eaa5cd91d1"`);
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP COLUMN "groupId"`);
    }

}
