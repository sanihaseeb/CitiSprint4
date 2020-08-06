import React from 'react';
import { render } from '@testing-library/react';
import Login from '../routes/login.js';



test('renders heading', () => {
  const { getByText } = render(<Login />);
  const heading = getByText('Select Sign-in Partner:');
  expect(heading).toBeInTheDocument();
});

test('renders bank link for CIBC', () => {
    const { getByText } = render(<Login />);
    const bank = getByText('CIBC');
    expect(bank).toBeInTheDocument();
  });

  test('renders bank link for RBC', () => {
    const { getByText } = render(<Login />);
    const bank = getByText('RBC');
    expect(bank).toBeInTheDocument();
  });
  test('renders bank link for Scotiabank', () => {
    const { getByText } = render(<Login />);
    const bank = getByText('Scotiabank');
    expect(bank).toBeInTheDocument();
  });
  test('renders bank link for BMO', () => {
    const { getByText } = render(<Login />);
    const bank = getByText('BMO');
    expect(bank).toBeInTheDocument();
  });

 
