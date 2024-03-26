-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "annee" TIMESTAMP(3) NOT NULL,
    "Type" VARCHAR(255) NOT NULL,
    "Ville" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
