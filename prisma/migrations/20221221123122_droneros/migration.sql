/*
  Warnings:

  - You are about to drop the column `resumeId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_resumeId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "resumeId";

-- CreateTable
CREATE TABLE "_ProductsToResume" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToResume_AB_unique" ON "_ProductsToResume"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToResume_B_index" ON "_ProductsToResume"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToResume" ADD CONSTRAINT "_ProductsToResume_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToResume" ADD CONSTRAINT "_ProductsToResume_B_fkey" FOREIGN KEY ("B") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
