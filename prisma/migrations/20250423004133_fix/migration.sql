/*
  Warnings:

  - You are about to drop the column `costumerCpf` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `costumerName` on the `Order` table. All the data in the column will be lost.
  - Added the required column `custumerCpf` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custumerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "costumerCpf",
DROP COLUMN "costumerName",
ADD COLUMN     "custumerCpf" TEXT NOT NULL,
ADD COLUMN     "custumerName" TEXT NOT NULL;
