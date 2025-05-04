import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage'; 
import { useReducer } from 'react';


global.fetchAPI = jest.fn().mockReturnValue(['12:00 PM', '1:00 PM', '2:00 PM']);

describe('BookingPage', () => {
  it('should initialize available times correctly', async () => {
    render(<BookingPage />);

    // Wait for the component to render and fetch data
    await waitFor(() => {
      
      const timeOptions = screen.getAllByRole('option');
      expect(timeOptions).toHaveLength(3);
      expect(timeOptions[1]).toHaveTextContent('12:00 PM');
      expect(timeOptions[2]).toHaveTextContent('1:00 PM');
      expect(timeOptions[3]).toHaveTextContent('2:00 PM');
    });
  });
});
