import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar component', () => {
    test('renders current month by default', () => {
      render(<Calendar selectedDate="" />); // Provide an empty string or a valid date string
      // Replace 'August 2023' with the current month and year in the format you expect
      expect(screen.getByText('August 2023')).toBeInTheDocument();
    });  

  test('renders selected month when valid date prop is passed', () => {
    render(<Calendar selectedDate="15-09-2023" />);
    expect(screen.getByText('September 2023')).toBeInTheDocument();
  });

  test('renders current month when invalid date prop is passed', () => {
    render(<Calendar selectedDate="32-13-2023" />);
    expect(screen.getByText('August 2023')).toBeInTheDocument();
  });
});
