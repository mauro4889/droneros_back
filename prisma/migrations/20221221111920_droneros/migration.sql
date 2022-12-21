/*
  Warnings:

  - You are about to drop the column `categoryField` on the `Products` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryField_fkey";

-- DropIndex
DROP INDEX "Category_categoryName_key";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "categoryField",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
