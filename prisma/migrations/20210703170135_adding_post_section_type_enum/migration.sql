/*
  Warnings:

  - Changed the type of `type` on the `PostSection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PostSectionType" AS ENUM ('paragraph', 'code', 'image', 'note', 'warning', 'error');

-- AlterTable
ALTER TABLE "PostSection" DROP COLUMN "type",
ADD COLUMN     "type" "PostSectionType" NOT NULL;
