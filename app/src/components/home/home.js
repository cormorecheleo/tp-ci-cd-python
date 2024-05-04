import { Link } from 'react-router-dom';
import './home.css';
import React, { useState, useEffect } from 'react';


function Home() {

    const [data, setData] = useState(null);


    // Fonction pour effectuer la requête GET
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:5002/users');
            if (!response.ok) {
                throw new Error('Erreur HTTP ' + response.status);
            }
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    }


    useEffect(() => {
        // Appeler la fonction pour effectuer la requête GET
        fetchData();
    }, []); // Le deuxième argument est une liste de dépendances, vide ici pour effectuer la requête une seule fois lors du montage du composant

    async function deleteUser(userId){
        try {
            const response = await fetch(`http://localhost:5002/users/${userId}`, {
                method: 'DELETE'
              });
              if (!response.ok) {
                throw new Error('Erreur HTTP ' + response.status);
              }
              // Rechargez les données après avoir supprimé l'utilisateur
              fetchData();
              console.log(`Utilisateur avec l'ID ${userId} supprimé avec succès`);
        } catch (error) {
            console.error('Erreur lors de la requete : ', error);
        }
    }


    return (
        <>
            <ul>
                <li><Link to="/" className='active'>UTILISATEURS</Link></li>
                <li><Link to="/form">AJOUTER</Link></li>
            </ul>
            <div className='container'>
                
                <div className='title'>
                    <h2>Liste inscrits</h2>
                </div>

                {data ? (
                <div className='table'>
                    <table>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Date de naissance</th>
                            <th>Ville</th>
                            <th>Nombre d'achat</th>
                            <th>Supprimer</th>
                        </tr>
                        {data.map((item, index) => (
                            <tr>
                                <td>{item.nom} {item.prenom}</td>
                                <td>{item.email}</td>
                                <td>{item.date_naissance}</td>
                                <td>{item.ville}, {item.code_postal}</td>
                                <td>{item.nombre_achat}</td>
                                <td><button onClick={() => deleteUser(item.id)} className='deleteButton'>Supprimer</button></td>
                            </tr>
                        ))}
                    </table>
                </div>
                ): (
                    <p>Chargement en cours...</p>
                )}
            </div>
        </>
    );
}

export default Home;