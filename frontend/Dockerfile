# Imagem base para o frontend (Node.js)
FROM node:22 as build

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo package.json e yarn.lock
COPY package*.json yarn.lock ./

# Instalando as dependências com Yarn
RUN yarn install

# Copiando o restante dos arquivos
COPY . .

# Roda a build do React
RUN yarn build

# servidor nginx para arquivos estaticos
FROM nginx:alpine

# Copia os arquivos buildados para o servidor nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta que o frontend vai rodar
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]