/*
  Warnings:

  - You are about to drop the `ProductsOnResume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsOnResume" DROP CONSTRAINT "ProductsOnResume_productsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnResume" DROP CONSTRAINT "ProductsOnResume_resumeId_fkey";

-- DropTable
DROP TABLE "ProductsOnResume";

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
