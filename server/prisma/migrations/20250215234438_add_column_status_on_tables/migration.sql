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
    "status" TEXT NOT NULL DEFAULT 'active',
    "isbn" TEXT NOT NULL,
    "numberOfPages" TEXT NOT NULL,
    CONSTRAINT "Book_bookShelfId_fkey" FOREIGN KEY ("bookShelfId") REFERENCES "BookShelf" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_librarianId_fkey" FOREIGN KEY ("librarianId") REFERENCES "Librarian" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("acquisitionMethod", "author", "available", "bookShelfId", "copies", "createdAt", "genre", "id", "isbn", "language", "librarianId", "notes", "numberOfPages", "publicationYear", "publisher", "registrationNumber", "shelfId", "title", "volume") SELECT "acquisitionMethod", "author", "available", "bookShelfId", "copies", "createdAt", "genre", "id", "isbn", "language", "librarianId", "notes", "numberOfPages", "publicationYear", "publisher", "registrationNumber", "shelfId", "title", "volume" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");
CREATE TABLE "new_BookShelf" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "description" TEXT,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_BookShelf" ("color", "createdAt", "description", "id", "name") SELECT "color", "createdAt", "description", "id", "name" FROM "BookShelf";
DROP TABLE "BookShelf";
ALTER TABLE "new_BookShelf" RENAME TO "BookShelf";
CREATE TABLE "new_Shelf" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "bookShelfId" TEXT NOT NULL,
    CONSTRAINT "Shelf_bookShelfId_fkey" FOREIGN KEY ("bookShelfId") REFERENCES "BookShelf" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Shelf" ("bookShelfId", "id", "letter", "number") SELECT "bookShelfId", "id", "letter", "number" FROM "Shelf";
DROP TABLE "Shelf";
ALTER TABLE "new_Shelf" RENAME TO "Shelf";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
