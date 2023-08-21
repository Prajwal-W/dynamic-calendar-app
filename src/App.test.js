import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders input box and Calendar component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter date (dd-mm-yyyy)')).toBeInTheDocument();
    expect(screen.getByText(/August 2023/i)).toBeInTheDocument();
  });

  test('renders selected month in Calendar when valid date is input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter date (dd-mm-yyyy)');
    fireEvent.change(input, { target: { value: '15-09-2023' } });
    expect(screen.getByText(/September 2023/i)).toBeInTheDocument();
  });

  test('renders current month in Calendar when invalid date is input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter date (dd-mm-yyyy)');
    fireEvent.change(input, { target: { value: '32-13-2023' } });
    expect(screen.getByText(/August 2023/i)).toBeInTheDocument();
  });
});
