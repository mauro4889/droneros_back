/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryField` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "categoryId",
ADD COLUMN     "categoryField" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryField_fkey" FOREIGN KEY ("categoryField") REFERENCES "Category"("categoryName") ON DELETE RESTRICT ON UPDATE CASCADE;
