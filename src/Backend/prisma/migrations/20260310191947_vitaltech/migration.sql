-- CreateTable
CREATE TABLE "administradores" (
    "id_administrador" INTEGER NOT NULL,
    "hash_palavra_chave" VARCHAR(200) NOT NULL,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id_administrador")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id_paciente" INTEGER NOT NULL,
    "is_ativo" BOOLEAN NOT NULL,
    "primeiro_acesso" BOOLEAN NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "profissionais" (
    "id_profissional" INTEGER NOT NULL,
    "crm" VARCHAR(10) NOT NULL,

    CONSTRAINT "profissionais_pkey" PRIMARY KEY ("id_profissional")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "hash_senha" VARCHAR(200) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "administradores" ADD CONSTRAINT "fk_administrador" FOREIGN KEY ("id_administrador") REFERENCES "usuarios"("id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "fk_paciente" FOREIGN KEY ("id_paciente") REFERENCES "usuarios"("id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "fk_profissional" FOREIGN KEY ("id_profissional") REFERENCES "usuarios"("id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION;
