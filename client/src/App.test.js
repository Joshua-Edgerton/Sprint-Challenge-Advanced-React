import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('App renders', () => {
  render(<App />);
  });

  test('Show title', () => {
    const { getByText } = render(<App />);
    getByText(/Women's World Cup Players/i);
    });