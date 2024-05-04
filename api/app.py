from flask import Flask, jsonify, request
import mysql.connector
from datetime import datetime
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
  host="localhost",
  port="3306",
  user="leo",
  password="sqlpass",
  database="python"
)

@app.route('/')
def hello():
    return 'Hello, Worldddd!'

@app.route('/users', methods=['GET'])
def get_users():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT * FROM utilisateur")
    result = cursor.fetchall()
    cursor.close()
    return jsonify(result)

@app.route('/users', methods=['POST'])
def store_user():
    # Récupérer les données de la requête
    data = request.json
    
    # Vérifier si toutes les clés requises sont présentes dans les données JSON
    if not all(key in data for key in ['nom', 'prenom', 'email', 'date_naissance', 'pays', 'ville', 'code_postal', 'nombre_achat']):
        return jsonify({'message': 'Tous les champs sont requis'}), 400
    
    # Convertir la date de naissance au format MySQL
    try:
        date_naissance = datetime.strptime(data['date_naissance'], '%d/%m/%Y').strftime('%Y-%m-%d')
    except ValueError:
        return jsonify({'message': 'Format de date invalide. Utilisez le format "DD/MM/YYYY"'}), 400
    
    # Insérer un nouvel utilisateur dans la base de données
    cursor = mydb.cursor()
    sql = "INSERT INTO utilisateur (nom, prenom, email, date_naissance, pays, ville, code_postal, nombre_achat) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    values = (data['nom'], data['prenom'], data['email'], date_naissance, data['pays'], data['ville'], data['code_postal'], data['nombre_achat'])
    cursor.execute(sql, values)
    mydb.commit()
    cursor.close()
    
    return jsonify({'message': 'Utilisateur enregistré avec succès'}), 201


# Route pour supprimer un utilisateur en fonction de son ID
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    cursor = mydb.cursor()
    # Requête SQL pour supprimer l'utilisateur avec l'ID donné
    sql = "DELETE FROM utilisateur WHERE id = %s"
    cursor.execute(sql, (user_id,))
    mydb.commit()  # Valider la suppression dans la base de données

    # Vérifier si des lignes ont été affectées (c'est-à-dire si l'utilisateur avec l'ID donné existait)
    if cursor.rowcount > 0:
        return jsonify({'message': f'Utilisateur avec l\'ID {user_id} supprimé avec succès'}), 200
    else:
        return jsonify({'message': f'Aucun utilisateur avec l\'ID {user_id} trouvé'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
