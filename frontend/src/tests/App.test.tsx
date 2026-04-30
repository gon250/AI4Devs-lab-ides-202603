import { render, screen } from '@testing-library/react';
import React from 'react';
import MainApp from '../App';

// Verifica que el enlace de React se renderiza correctamente
test('muestra el enlace de aprendizaje de React', () => {
  render(<MainApp />);
  const linkNode = screen.getByText(/learn react/i);
  expect(linkNode).toBeInTheDocument();
});
