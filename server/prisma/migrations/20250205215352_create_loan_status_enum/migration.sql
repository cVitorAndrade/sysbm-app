/*
  Warnings:

  - You are about to alter the column `timesRenewed` on the `Loan` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Loan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "readerId" TEXT NOT NULL,
    "librarianId" TEXT NOT NULL,
    "receivedById" TEXT,
    "bookId" TEXT NOT NULL,
    "bookConditionDelivery" TEXT NOT NULL,
    "bookConditionReturn" TEXT,
    "returnDate" DATETIME NOT NULL,
    "finalDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "observation" TEXT,
    "timesRenewed" INTEGER NOT NULL,
    CONSTRAINT "Loan_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_librarianId_fkey" FOREIGN KEY ("librarianId") REFERENCES "Librarian" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "Librarian" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Loan_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Loan" ("bookConditionDelivery", "bookConditionReturn", "bookId", "createdAt", "finalDate", "id", "librarianId", "observation", "readerId", "receivedById", "returnDate", "status", "timesRenewed") SELECT "bookConditionDelivery", "bookConditionReturn", "bookId", "createdAt", "finalDate", "id", "librarianId", "observation", "readerId", "receivedById", "returnDate", "status", "timesRenewed" FROM "Loan";
DROP TABLE "Loan";
ALTER TABLE "new_Loan" RENAME TO "Loan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
