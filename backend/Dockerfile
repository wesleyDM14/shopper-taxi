# Imagem base para o backend (Node.js)
FROM node:22

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL
# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo package.json e yarn.lock
COPY package*.json yarn.lock ./ 

# Instalando as dependências
RUN yarn install

# Copiando o restante dos arquivos
COPY . .

# Garantindo que o wait-for-it.sh tenha permissão de execução
RUN chmod +x ./wait-for-it.sh

# Gera o Prisma Client
RUN npx prisma generate

# Aplica as migrações
#RUN npx prisma migrate deploy

# Executando a seed do banco de dados
#RUN yarn seed

# Expondo a porta que o backend vai rodar
EXPOSE 8080

# Comando para iniciar o servidor
#CMD ["yarn", "dev"]
CMD ./wait-for-it.sh postgres:5432 -- npx prisma migrate deploy && yarn seed && yarn dev