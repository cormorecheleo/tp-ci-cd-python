describe('Mon application', () => {
  it('Affiche la liste des utilisateurs', () => {
    cy.visit('http://localhost:3000'); 
    cy.contains('Liste inscrits'); 
  });

  it('Affiche le formulaire', () => {
    cy.visit('http://localhost:3000/form');
    cy.contains('Ajouter un utilisateur'); 
  });

});