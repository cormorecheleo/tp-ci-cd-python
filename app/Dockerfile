# Utilisez l'image officielle Node.js comme base
FROM node:14-alpine

# Définissez le répertoire de travail
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copiez le fichier package.json et package-lock.json séparément
# Ceci est fait pour profiter de la mise en cache des dépendances
COPY public/ /app/public
COPY src/ /app/src
COPY package.json ./
COPY package-lock.json ./

# Installez les dépendances
RUN npm install --silent
RUN npm install react-scripts@latest -g --silent

# Copiez le code source de votre application React dans le conteneur
COPY . ./

# Construisez l'application React
# RUN npm run build

# Exposez le port 3000 pour accéder à l'application
EXPOSE 3000

# Démarrez l'application React
CMD ["npm", "start"]
