# Imagem base para o backend (Node.js)
FROM node:22

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo package.json e  yarn.lock
COPY package*.json yarn.lock ./

# Instalando as dependências
RUN yarn install

# Copiando o restante dos arquivos
COPY . .

# Gera o Prisma Client e aplica as migrações
RUN npx prisma generate

# Expondo a porta que o backend vai rodar
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["yarn", "start"]