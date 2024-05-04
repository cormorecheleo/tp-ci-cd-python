import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './form';

test('soumet le formulaire avec les données saisies', () => {
    render(<Form />);
  
    const nomInput = screen.getByLabelText(/Nom:/i);
    fireEvent.change(nomInput, { target: { value: 'Doe' } });
  
    const prenomInput = screen.getByLabelText(/Prénom:/i);
    fireEvent.change(prenomInput, { target: { value: 'John' } });
  
    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  
    const dateInput = screen.getByLabelText(/Date de naissance:/i);
    fireEvent.change(dateInput, { target: { value: '20/03/2000' } });

    const paysInput = screen.getByLabelText(/Pays:/i);
    fireEvent.change(paysInput, { target: { value: 'France' } });

    const villeInput = screen.getByLabelText(/Ville:/i);
    fireEvent.change(villeInput, { target: { value: 'Antibes' } });

    const codeInput = screen.getByLabelText(/Code postal:/i);
    fireEvent.change(codeInput, { target: { value: '06600' } });

    const nbIput = screen.getByLabelText(/Nombre d'achats:/i);
    fireEvent.change(nbIput, { target: { value: '5' } });
    
    const submitButton = screen.getByText(/Créer Utilisateur/i);
    
  
    expect(nomInput).toHaveValue('Doe');
    expect(prenomInput).toHaveValue('John');
    expect(emailInput).toHaveValue('john@example.com');
    expect(dateInput).toHaveValue('20/03/2000');
    expect(paysInput).toHaveValue('France');
    expect(villeInput).toHaveValue('Antibes');
    expect(codeInput).toHaveValue('06600');
    expect(nbIput).toHaveValue('5');

    fireEvent.click(submitButton);
  });