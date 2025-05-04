// src/components/BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
