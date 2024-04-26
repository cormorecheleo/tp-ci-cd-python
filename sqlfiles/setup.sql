-- Fichier 1: Création de la base de données
CREATE DATABASE IF NOT EXISTS python;

-- Fichier 2: Création de la table utilisateur
USE python;

CREATE TABLE IF NOT EXISTS utilisateur (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255),
    date_naissance DATE,
    pays VARCHAR(255),
    ville VARCHAR(255),
    code_postal VARCHAR(5),
    nombre_achat INT
);

-- Fichier 3: Insertion d'une ligne dans la table utilisateur
INSERT INTO utilisateur (id, nom, prenom, email)
VALUES (1, 'cormo', 'leo', 'leo.cormoreche@ynov.com');
