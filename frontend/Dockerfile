# Imagem base para o frontend (Node.js)
FROM node:22

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo package.json e yarn.lock
COPY package*.json yarn.lock ./

# Instalando as dependências com Yarn
RUN yarn install

# Copiando o restante dos arquivos
COPY . .

# Expondo a porta que o frontend vai rodar
EXPOSE $PORT

# Comando para rodar o frontend
CMD ["yarn", "start"]