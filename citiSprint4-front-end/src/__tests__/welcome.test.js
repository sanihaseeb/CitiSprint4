import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../routes/welcome.js';



test('renders heading', () => {
  const { getByText } = render(<Welcome />);
  const heading = getByText('Welcome to Citi-Balance!');
  expect(heading).toBeInTheDocument();
});
test('renders subheading', () => {
    const { getByText } = render(<Welcome />);
    const subheading = getByText('Use your money the right way.');
    expect(subheading).toBeInTheDocument();
  });

  test('renders login button', () => {
    const { getByText } = render(<Welcome />);
    const loginButton = getByText('Login!');
    expect(loginButton).toBeInTheDocument();
  });
  test('renders signup button', () => {
    const { getByText } = render(<Welcome />);
    const signupButton = getByText('Sign up!');
    expect(signupButton).toBeInTheDocument();
  });


 
