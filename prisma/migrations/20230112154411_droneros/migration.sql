-- DropForeignKey
ALTER TABLE "ResumeToProducts" DROP CONSTRAINT "ResumeToProducts_productsId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeToProducts" DROP CONSTRAINT "ResumeToProducts_resumeId_fkey";

-- AddForeignKey
ALTER TABLE "ResumeToProducts" ADD CONSTRAINT "ResumeToProducts_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeToProducts" ADD CONSTRAINT "ResumeToProducts_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
