FROM node:21 

WORKDIR /app

# Copier le package.json et le package-lock.json pour installer les dépendances
COPY ./music-hall/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY ./music-hall .

# Exposer le port sur lequel l'application fonctionne
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]