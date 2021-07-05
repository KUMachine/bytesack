/*
  Warnings:

  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorImage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "PostSectionType" ADD VALUE 'heading';

-- DropIndex
DROP INDEX "PostSection.seq_unique";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "authorImage" TEXT NOT NULL,
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "readTime" INTEGER DEFAULT 5,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "PostSection" ADD COLUMN     "src" TEXT;
