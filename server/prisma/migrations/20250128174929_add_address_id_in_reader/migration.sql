/*
  Warnings:

  - Added the required column `addressId` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reader" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "birtDate" DATETIME NOT NULL,
    "addressId" TEXT NOT NULL,
    CONSTRAINT "Reader_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reader" ("birtDate", "cpf", "createdAt", "email", "id", "name", "phoneNumber", "status") SELECT "birtDate", "cpf", "createdAt", "email", "id", "name", "phoneNumber", "status" FROM "Reader";
DROP TABLE "Reader";
ALTER TABLE "new_Reader" RENAME TO "Reader";
CREATE UNIQUE INDEX "Reader_email_key" ON "Reader"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
