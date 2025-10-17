-- CreateTable
CREATE TABLE "Pot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "targetBalance" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Pot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pot" ADD CONSTRAINT "Pot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
