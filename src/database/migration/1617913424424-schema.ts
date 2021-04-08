import {MigrationInterface, QueryRunner} from "typeorm";

export class schema1617913424424 implements MigrationInterface {
    name = 'schema1617913424424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `login` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profile` enum ('admin', 'user', 'ghost') NOT NULL, `companyId` varchar(36) NULL, UNIQUE INDEX `IDX_2d443082eccd5198f95f2a36e2` (`login`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `indicators` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` mediumtext NOT NULL, `polarity` enum ('positive', 'negative') NOT NULL, `target` float NOT NULL, `targetType` enum ('percentage', 'currency', 'value') NOT NULL, `frequency` enum ('yearly', 'monthly', 'daily') NOT NULL, `formula` varchar(255) NOT NULL, `goalId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `goals` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `prospectId` varchar(36) NULL, `predecessorId` varchar(36) NULL, UNIQUE INDEX `REL_67ec49978efe0d54377c12aa53` (`predecessorId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `prospects` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `companyId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `signatureValues` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `value` float NOT NULL, `day` varchar(255) NOT NULL, `month` varchar(255) NOT NULL, `year` varchar(255) NOT NULL, `signatureId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `signatures` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `frequency` enum ('yearly', 'monthly', 'daily') NOT NULL, `companyId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companies` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `mission` mediumtext NOT NULL, `vision` mediumtext NOT NULL, `values` mediumtext NOT NULL, UNIQUE INDEX `IDX_3dacbb3eb4f095e29372ff8e13` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_6f9395c9037632a31107c8a9e58` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `indicators` ADD CONSTRAINT `FK_3f24771d9a598d88fe6b5dbd7d2` FOREIGN KEY (`goalId`) REFERENCES `goals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `goals` ADD CONSTRAINT `FK_86d995c24d86e3c2835a97cfcd3` FOREIGN KEY (`prospectId`) REFERENCES `prospects`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `goals` ADD CONSTRAINT `FK_67ec49978efe0d54377c12aa53c` FOREIGN KEY (`predecessorId`) REFERENCES `goals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `prospects` ADD CONSTRAINT `FK_56f6f0706bfd287b3691da842c2` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `signatureValues` ADD CONSTRAINT `FK_1aba01db3305e2494b3d163d00a` FOREIGN KEY (`signatureId`) REFERENCES `signatures`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `signatures` ADD CONSTRAINT `FK_b92abb6ad8870505b145bce3410` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `signatures` DROP FOREIGN KEY `FK_b92abb6ad8870505b145bce3410`");
        await queryRunner.query("ALTER TABLE `signatureValues` DROP FOREIGN KEY `FK_1aba01db3305e2494b3d163d00a`");
        await queryRunner.query("ALTER TABLE `prospects` DROP FOREIGN KEY `FK_56f6f0706bfd287b3691da842c2`");
        await queryRunner.query("ALTER TABLE `goals` DROP FOREIGN KEY `FK_67ec49978efe0d54377c12aa53c`");
        await queryRunner.query("ALTER TABLE `goals` DROP FOREIGN KEY `FK_86d995c24d86e3c2835a97cfcd3`");
        await queryRunner.query("ALTER TABLE `indicators` DROP FOREIGN KEY `FK_3f24771d9a598d88fe6b5dbd7d2`");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_6f9395c9037632a31107c8a9e58`");
        await queryRunner.query("DROP INDEX `IDX_3dacbb3eb4f095e29372ff8e13` ON `companies`");
        await queryRunner.query("DROP TABLE `companies`");
        await queryRunner.query("DROP TABLE `signatures`");
        await queryRunner.query("DROP TABLE `signatureValues`");
        await queryRunner.query("DROP TABLE `prospects`");
        await queryRunner.query("DROP INDEX `REL_67ec49978efe0d54377c12aa53` ON `goals`");
        await queryRunner.query("DROP TABLE `goals`");
        await queryRunner.query("DROP TABLE `indicators`");
        await queryRunner.query("DROP INDEX `IDX_2d443082eccd5198f95f2a36e2` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
