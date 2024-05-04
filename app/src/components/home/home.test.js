import React from "react";
import {render, screen } from '@testing-library/react';
import Home from "./home";

test('affiche la liste des utilisateur', () => {
    render(<Home/>);

    // Verification
    const titleElement = screen.getByRole('h2');
    expect(titleElement).toBeInTheDocument();
    const tableElement = screen.getByRole('table');
    expect(tableElement) = toBeInTheDocument();
})