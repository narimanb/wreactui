import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../Dropdown';
import Theme from '../themes/default';

const dropdown = () => screen.getByTestId('test');
const user = userEvent.setup();

test('should render without crashing', () => {
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} data-testid="test" />);

	expect(dropdown()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const onClose = jest.fn();
	const expectedClasses = Theme.dropdown.base;
	render(<Dropdown isOpen={true} onClose={onClose} data-testid="test" />);

	expect(dropdown()).toHaveClass(expectedClasses);
});

test('should render aligned to the default position', () => {
	const expectedClasses = Theme.dropdown.align.left;
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} data-testid="test" />);

	expect(dropdown()).toHaveClass(expectedClasses);
});

test('should render aligned to the left', () => {
	const expectedClasses = Theme.dropdown.align.left;
	const onClose = jest.fn();
	render(
		<Dropdown align="left" isOpen={true} onClose={onClose} data-testid="test" />
	);

	expect(dropdown()).toHaveClass(expectedClasses);
});

test('should render aligned to the right', () => {
	const expectedClasses = Theme.dropdown.align.right;
	const onClose = jest.fn();
	render(
		<Dropdown
			align="right"
			isOpen={true}
			onClose={onClose}
			data-testid="test"
		/>
	);

	expect(dropdown()).toHaveClass(expectedClasses);
});

test('should call onClose when Esc is pressed', async () => {
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} />);

	await user.keyboard('{Escape}');

	expect(onClose).toHaveBeenCalled();
});

test('should close dropdown when clicking outside it', async () => {
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} />);

	await user.click(document.body);

	expect(onClose).toHaveBeenCalled();
});

test('should not close dropdown when clicking inside it', async () => {
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} data-testid="test" />);

	await user.click(dropdown());

	expect(onClose).not.toHaveBeenCalled();
});

test('should not call onClose when other key than Esc is pressed', async () => {
	const onClose = jest.fn();
	render(<Dropdown isOpen={true} onClose={onClose} data-testid="test" />);

	await user.keyboard('{Enter}');

	expect(onClose).not.toHaveBeenCalled();
});
