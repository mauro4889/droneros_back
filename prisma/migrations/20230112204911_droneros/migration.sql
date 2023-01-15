/*
  Warnings:

  - Added the required column `name` to the `ResumeToProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ResumeToProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ResumeToProducts" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
