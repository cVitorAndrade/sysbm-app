/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reader_cpf_key" ON "Reader"("cpf");
