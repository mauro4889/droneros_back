/*
  Warnings:

  - The primary key for the `Resume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ResumeToProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ResumeToProducts" DROP CONSTRAINT "ResumeToProducts_resumeId_fkey";

-- AlterTable
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Resume_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Resume_id_seq";

-- AlterTable
ALTER TABLE "ResumeToProducts" DROP CONSTRAINT "ResumeToProducts_pkey",
ALTER COLUMN "resumeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ResumeToProducts_pkey" PRIMARY KEY ("resumeId", "productsId");

-- AddForeignKey
ALTER TABLE "ResumeToProducts" ADD CONSTRAINT "ResumeToProducts_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
