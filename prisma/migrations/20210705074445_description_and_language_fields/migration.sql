-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "description" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "language" TEXT NOT NULL DEFAULT E'en';
