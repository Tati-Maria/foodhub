/*
  Warnings:

  - You are about to drop the column `image` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `resturantId` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `resturantId` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `resturantId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `resturantId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_resturantId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_resturantId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_resturantId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_resturantId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "image",
DROP COLUMN "resturantId",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "resturantId";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "resturantId",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "resturantId",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
