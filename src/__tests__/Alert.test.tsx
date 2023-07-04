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
	const onClose = jest.fn();

	render(<Alert onClose={onClose} />);

	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('should call a function when close button is clicked', async () => {
	const onClose = jest.fn();

	render(<Alert onClose={onClose} data-testid="test" />);

	await user.click(screen.getByRole('button'));

	expect(onClose).toHaveBeenCalledTimes(1);
});

test('should render a success icon', () => {
	const { container } = render(<Alert type="success" />);

	const icon = container.querySelector('svg[data-icon=success]');

	expect(icon).toBeInTheDocument();
});

test('should render a danger icon', () => {
	const { container } = render(<Alert type="danger" />);

	const icon = container.querySelector('svg[data-icon=danger]');

	expect(icon).toBeInTheDocument();
});

test('should render an info icon', () => {
	const { container } = render(<Alert type="info" />);

	const icon = container.querySelector('svg[data-icon=info]');

	expect(icon).toBeInTheDocument();
});

test('should render a warning icon', () => {
	const { container } = render(<Alert type="warning" />);

	const icon = container.querySelector('svg[data-icon=warning]');

	expect(icon).toBeInTheDocument();
});

test('should render a neutral icon', () => {
	const { container } = render(<Alert type="neutral" />);

	const icon = container.querySelector('svg[data-icon=neutral]');

	expect(icon).toBeInTheDocument();
});

it('should render a neutral icon for an invalid type', () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const { container } = render(<Alert type="invalid" />);

	const icon = container.querySelector('svg[data-icon=neutral]');

	expect(icon).toBeInTheDocument();
});
