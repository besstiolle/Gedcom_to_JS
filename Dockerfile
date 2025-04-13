# Étape 1 : Build avec Node et Webpack
FROM node:23-slim AS builder

WORKDIR /app

# Copier les fichiers nécessaires au build
COPY package*.json ./
COPY tsconfig*.json ./
COPY webpack.config.js ./
COPY src ./src
# Particularités projets
COPY favicon.png ./

# Installer les dépendances
RUN npm install

# Compiler le projet avec Webpack
RUN npm run build

# Étape 2 : With Nginx
#FROM nginx:alpine
#RUN rm -rf /usr/share/nginx/html/*
#COPY --from=builder /app/dist /usr/share/nginx/html
#COPY web_static /usr/share/nginx/html
#EXPOSE 80

# Étape 2 : With Lupanski docker static website image
# https://lipanski.com/posts/smallest-docker-image-static-website
FROM lipanski/docker-static-website
COPY --from=builder /app/dist .
COPY web_static .
EXPOSE 3000


# HOW TO : 
    # docker build --pull --rm -f 'Dockerfile' -t 'gedcomtojs:latest' '.' 
    # docker run -d -p 8080:80 (ou 8080:3000) gedcomtojs:latest
    # docker exec -it xxx /bin/ash