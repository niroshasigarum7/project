import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Turn on push notification/i);
  const hyperLink = getByText(/What updates will I receive/i);
  expect(linkElement).toBeInTheDocument();
  expect(hyperLink).toBeInTheDocument();
});

test('on clicking href / button', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Turn it on/i)).toBeInTheDocument();
  expect(getByText(/What updates will I receive/i)).toBeInTheDocument();
  fireEvent.click(getByText(/What updates will I receive/i));
  fireEvent.click(getByText(/Turn it on/i));
  fireEvent.click(getByText(/I'll do it later/i));
});