/*
  Warnings:

  - You are about to drop the column `created_at` on the `Book` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "registrationNumber" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "shelfId" TEXT NOT NULL,
    "bookShelfId" TEXT NOT NULL,
    "publicationYear" TEXT NOT NULL,
    "notes" TEXT,
    "publisher" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "copies" TEXT NOT NULL,
    "acquisitionMethod" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "librarianId" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "available" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "numberOfPages" TEXT NOT NULL,
    CONSTRAINT "Book_bookShelfId_fkey" FOREIGN KEY ("bookShelfId") REFERENCES "BookShelf" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_librarianId_fkey" FOREIGN KEY ("librarianId") REFERENCES "Librarian" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("acquisitionMethod", "author", "available", "bookShelfId", "copies", "genre", "id", "isbn", "language", "librarianId", "notes", "numberOfPages", "publicationYear", "publisher", "registrationNumber", "shelfId", "title", "volume") SELECT "acquisitionMethod", "author", "available", "bookShelfId", "copies", "genre", "id", "isbn", "language", "librarianId", "notes", "numberOfPages", "publicationYear", "publisher", "registrationNumber", "shelfId", "title", "volume" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
