// src/pages/ContactUs.test.js
import { render, screen } from '@testing-library/react';
import ContactUs from './ContactUs';
import userEvent from '@testing-library/user-event';

test('renders required input fields with correct HTML5 attributes', () => {
  render(<ContactUs />);

  const firstName = screen.getByLabelText(/first name/i);
  expect(firstName).toBeRequired();
  expect(firstName).toHaveAttribute('type', 'text');

  const email = screen.getByLabelText(/email/i);
  expect(email).toBeRequired();
  expect(email).toHaveAttribute('type', 'email');

  const phone = screen.getByLabelText(/phone/i);
  expect(phone).toBeRequired();
  expect(phone).toHaveAttribute('type', 'tel');
});




//React-TEST:
test('disables submit button for invalid input', async () => {
    render(<ContactUs />);
    const user = userEvent.setup();
  
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  
    await user.type(screen.getByLabelText(/first name/i), '123');
    await user.type(screen.getByLabelText(/last name/i), '456');
    await user.type(screen.getByLabelText(/email/i), 'not-an-email');
    await user.type(screen.getByLabelText(/phone/i), 'abcd');
  
    expect(submitButton).toBeDisabled();
  });
  
  test('enables submit button for valid input', async () => {
    render(<ContactUs />);
    const user = userEvent.setup();
  
    await user.type(screen.getByLabelText(/first name/i), 'Alice');
    await user.type(screen.getByLabelText(/last name/i), 'Smith');
    await user.type(screen.getByLabelText(/email/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/phone/i), '1234567890');
  
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeEnabled();
  });