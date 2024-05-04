import { Link } from 'react-router-dom';
import './form.css';
import React, { useState } from 'react';



function Form() {

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        date_naissance: '',
        pays: '',
        ville: '',
        code_postal: '',
        nombre_achat: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Erreur HTTP ' + response.status);
            }

            // Réinitialiser le formulaire après la soumission réussie
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                date_naissance: '',
                pays: '',
                ville: '',
                code_postal: '',
                nombre_achat: ''
            });

            console.log('Utilisateur créé avec succès');
            window.location.href = '/';
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
        }
    };

    return (
        <>
            <ul>
                <li><Link to="/">UTILISATEURS</Link></li>
                <li><Link to="/form" className='active'>AJOUTER</Link></li>
            </ul>

            <div className='container'>

                <div className='title'>
                    <h2>Ajouter un utilisateur</h2>
                </div>


                <form className="form-container" onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                    </label>
                    <label>
                        Prénom:
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Date de naissance:
                        <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} />
                    </label>
                    <label>
                        Pays:
                        <input type="text" name="pays" value={formData.pays} onChange={handleChange} />
                    </label>
                    <label>
                        Ville:
                        <input type="text" name="ville" value={formData.ville} onChange={handleChange} />
                    </label>
                    <label>
                        Code postal:
                        <input type="text" name="code_postal" value={formData.code_postal} onChange={handleChange} />
                    </label>
                    <label>
                        Nombre d'achats:
                        <input type="text" name="nombre_achat" value={formData.nombre_achat} onChange={handleChange} />
                    </label>
                    <button type="submit">Créer Utilisateur</button>
                </form>
            </div>
        </>
    );

}

export default Form;