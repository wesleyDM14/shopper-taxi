# Imagem base para o backend (Node.js)
FROM node:22

# Definindo variáveis de ambiente e argumentos
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos de dependências (package.json e yarn.lock)
COPY package*.json yarn.lock ./

# Instalando as dependências
RUN yarn install

# Copiando o restante dos arquivos da aplicação
COPY . .

# Garantindo que o wait-for-it.sh tenha permissão de execução
RUN chmod +x ./wait-for-it.sh

# Gera o Prisma Client
RUN npx prisma generate

# Expondo a porta que o backend vai rodar
EXPOSE 8080

# Comando para garantir que o banco de dados esteja pronto, aplicar migrações e rodar a aplicação
CMD ./wait-for-it.sh postgres:5432 --timeout=60 -- npx prisma migrate dev --name init && yarn seed && yarn dev