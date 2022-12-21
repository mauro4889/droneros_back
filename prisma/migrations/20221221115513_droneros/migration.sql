/*
  Warnings:

  - You are about to drop the column `userId` on the `Products` table. All the data in the column will be lost.
  - Added the required column `resumeId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_userId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "userId",
ADD COLUMN     "resumeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
