-- CreateTable
CREATE TABLE "BookShelf" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Shelf" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "bookShelfId" TEXT NOT NULL,
    CONSTRAINT "Shelf_bookShelfId_fkey" FOREIGN KEY ("bookShelfId") REFERENCES "BookShelf" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "registrationNumber" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "shelfId" TEXT NOT NULL,
    "bookShelfId" TEXT NOT NULL,
    "publicationYear" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
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
