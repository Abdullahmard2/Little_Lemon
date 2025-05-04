import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm'; 
import { useState } from 'react';


global.fetchAPI = jest.fn().mockImplementation((date) => {
  if (date.toDateString() === new Date('2025-05-03').toDateString()) {
    return ['5:00 PM', '6:00 PM', '7:00 PM']; 
  }
  return ['12:00 PM', '1:00 PM', '2:00 PM']; 
});

describe('BookingForm', () => {
  it('should update available times based on selected date', async () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);

 
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2025-05-03' } });

   
    await waitFor(() => {
      const timeOptions = screen.getAllByRole('option');
      expect(timeOptions).toHaveLength(3); 
      expect(timeOptions[0]).toHaveTextContent('5:00 PM');
      expect(timeOptions[1]).toHaveTextContent('6:00 PM');
      expect(timeOptions[2]).toHaveTextContent('7:00 PM');
    });
  });
});
