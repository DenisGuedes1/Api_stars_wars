import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694533898154 implements MigrationInterface {
    name = 'InitialMigration1694533898154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Movie" ("id" SERIAL NOT NULL, "title" character varying(45) NOT NULL, "type" text NOT NULL, "gender" text NOT NULL, "synopsy" text NOT NULL, "cast" text NOT NULL, "photo" text NOT NULL, "year_release" text NOT NULL, "play_button" text NOT NULL, CONSTRAINT "UQ_db9b75bd0e21fb0e5e018f03412" UNIQUE ("title"), CONSTRAINT "PK_56d58b76292b87125c5ec8bdde0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Movie"`);
    }

}
