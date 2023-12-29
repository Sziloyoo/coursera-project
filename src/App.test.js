import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm.js';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the booking form time options', () => {
    const availableTimes = {
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    };
    const removeTime = jest.fn();

    render(<BookingForm availableTimes={availableTimes} removeTime={removeTime} />);

    const headingElement = screen.getByText("Book a table!");

    expect(headingElement).toBeInTheDocument();
});

test('Enables submit button after date is selected', () => {
    const availableTimes = {
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    };
    const removeTime = jest.fn();

    render(<BookingForm availableTimes={availableTimes} removeTime={removeTime} />);

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

    const submitButton = screen.getByValue("Make Your reservation");

    expect(submitButton).not.toHaveClass("book-button-disabled");
});
