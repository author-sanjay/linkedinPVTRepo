/*
  Warnings:

  - You are about to drop the column `userDoingId` on the `job` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `job` DROP FOREIGN KEY `Job_userDoingId_fkey`;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `userDoingId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `jobDoingId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_jobDoingId_fkey` FOREIGN KEY (`jobDoingId`) REFERENCES `Job`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
