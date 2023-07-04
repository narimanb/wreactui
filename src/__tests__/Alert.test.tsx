import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Alert from '../Alert';
import Theme from '../themes/default';

const alert = () => screen.getByTestId('test');
const user = userEvent.setup();

test('should render without crashing', () => {
	render(<Alert data-testid="test" />);

	expect(alert()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.alert.base;
	render(<Alert data-testid="test" />);

	expect(alert()).toHaveClass(expectedClasses);
});

test('should not contain a close button', () => {
	render(<Alert />);

	expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test('should not contain a close button', () => {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	render(<Alert onClose={() => {}} />);

	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('should call a function when close button is clicked', async () => {
	const onClose = jest.fn();

	render(<Alert onClose={onClose} data-testid="test" />);

	await user.click(screen.getByRole('button'));

	expect(onClose).toHaveBeenCalled();
});
