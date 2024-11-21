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

# Expondo a porta que o backend vai rodar
EXPOSE $PORT

# Comando para rodar o backend
CMD ["yarn", "dev"]