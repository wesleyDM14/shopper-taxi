#!/bin/sh

# Verifica se a pasta de migrações existe. Se não, roda o migrate dev.
if [ ! -d "./prisma/migrations" ]; then
  echo "Primeira execução, rodando prisma migrate dev para criar as migrações e configurar o banco de dados."
  npx prisma migrate dev --name init
else
  echo "Migrações já existem, rodando prisma migrate deploy."
  npx prisma migrate deploy
fi

# Rodando o seed se necessário
yarn seed

# Iniciando a aplicação
yarn dev