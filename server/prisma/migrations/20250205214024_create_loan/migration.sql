-- CreateTable
CREATE TABLE "Loan" (
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
    "timesRenewed" TEXT NOT NULL,
    CONSTRAINT "Loan_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_librarianId_fkey" FOREIGN KEY ("librarianId") REFERENCES "Librarian" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "Librarian" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Loan_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
