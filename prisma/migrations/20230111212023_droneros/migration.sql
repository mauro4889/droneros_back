/*
  Warnings:

  - You are about to drop the `_ProductsToResume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductsToResume" DROP CONSTRAINT "_ProductsToResume_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToResume" DROP CONSTRAINT "_ProductsToResume_B_fkey";

-- DropTable
DROP TABLE "_ProductsToResume";

-- CreateTable
CREATE TABLE "ProductsOnResume" (
    "productsId" TEXT NOT NULL,
    "resumeId" INTEGER NOT NULL,

    CONSTRAINT "ProductsOnResume_pkey" PRIMARY KEY ("productsId")
);

-- AddForeignKey
ALTER TABLE "ProductsOnResume" ADD CONSTRAINT "ProductsOnResume_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnResume" ADD CONSTRAINT "ProductsOnResume_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
