-- CreateTable
CREATE TABLE "Cohorte" (
    "Code_cohorte" SERIAL NOT NULL,
    "Id_session" INTEGER NOT NULL,
    "Description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cohorte_pkey" PRIMARY KEY ("Code_cohorte")
);

-- CreateTable
CREATE TABLE "Affecter" (
    "Code_affecter" SERIAL NOT NULL,
    "Code_cohorte" INTEGER NOT NULL,
    "Matricule_coach" INTEGER NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Affecter_pkey" PRIMARY KEY ("Code_affecter")
);

-- CreateTable
CREATE TABLE "Coaches" (
    "Matricule_coach" SERIAL NOT NULL,
    "Nom" VARCHAR(255) NOT NULL,
    "Postnom" VARCHAR(255) NOT NULL,
    "Prenom" VARCHAR(255) NOT NULL,
    "Date_naissance" TIMESTAMP(3) NOT NULL,
    "Adresse" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "Telephone" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coaches_pkey" PRIMARY KEY ("Matricule_coach")
);

-- CreateTable
CREATE TABLE "Machine" (
    "Tag_machine" SERIAL NOT NULL,
    "Code_modele" INTEGER NOT NULL,
    "Matricule_coach" INTEGER NOT NULL,
    "Code_fabriquant" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("Tag_machine")
);

-- CreateTable
CREATE TABLE "Fabriquant" (
    "Code_fabriquant" SERIAL NOT NULL,
    "Libelle" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fabriquant_pkey" PRIMARY KEY ("Code_fabriquant")
);

-- CreateTable
CREATE TABLE "Model" (
    "Code_modele" SERIAL NOT NULL,
    "Libelle" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("Code_modele")
);

-- CreateTable
CREATE TABLE "Apprennat" (
    "Matricule_apprenant" SERIAL NOT NULL,
    "Nom" VARCHAR(255) NOT NULL,
    "Postnom" VARCHAR(255) NOT NULL,
    "Prenom" VARCHAR(255) NOT NULL,
    "Date_naissance" TIMESTAMP(3) NOT NULL,
    "Adresse" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "Telephone" VARCHAR(255) NOT NULL,
    "Code_cohorte" INTEGER NOT NULL,
    "Tag_machine" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apprennat_pkey" PRIMARY KEY ("Matricule_apprenant")
);

-- AddForeignKey
ALTER TABLE "Cohorte" ADD CONSTRAINT "Cohorte_Id_session_fkey" FOREIGN KEY ("Id_session") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Affecter" ADD CONSTRAINT "Affecter_Code_cohorte_fkey" FOREIGN KEY ("Code_cohorte") REFERENCES "Cohorte"("Code_cohorte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Affecter" ADD CONSTRAINT "Affecter_Matricule_coach_fkey" FOREIGN KEY ("Matricule_coach") REFERENCES "Coaches"("Matricule_coach") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_Matricule_coach_fkey" FOREIGN KEY ("Matricule_coach") REFERENCES "Coaches"("Matricule_coach") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_Code_modele_fkey" FOREIGN KEY ("Code_modele") REFERENCES "Model"("Code_modele") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_Code_fabriquant_fkey" FOREIGN KEY ("Code_fabriquant") REFERENCES "Fabriquant"("Code_fabriquant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apprennat" ADD CONSTRAINT "Apprennat_Code_cohorte_fkey" FOREIGN KEY ("Code_cohorte") REFERENCES "Cohorte"("Code_cohorte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apprennat" ADD CONSTRAINT "Apprennat_Tag_machine_fkey" FOREIGN KEY ("Tag_machine") REFERENCES "Machine"("Tag_machine") ON DELETE RESTRICT ON UPDATE CASCADE;
