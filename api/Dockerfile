# Utilisez l'image officielle Python comme base
FROM python:3.9

# Copiez le code source de votre API Python dans le conteneur
COPY . /api

# Définissez le répertoire de travail
WORKDIR /api

# Installez les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Exposez le port 5000 pour l'API Flask
EXPOSE 5001

# Démarrez l'API Flask
CMD ["python", "app.py"]
