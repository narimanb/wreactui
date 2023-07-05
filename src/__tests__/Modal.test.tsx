import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Modal';
import Theme from '../themes/default';

const modal = () => screen.getByTestId('test');
const user = userEvent.setup();

test('should render without crashing', () => {
	const onClose = jest.fn();

	render(
		<Modal isOpen={true} onClose={onClose}>
			Lorem ipsum
		</Modal>
	);

	expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('should render with base styles', () => {
	const onClose = jest.fn();
	const expectedClasses = Theme.modal.base;

	render(
		<Modal isOpen={true} onClose={onClose} data-testid="test">
			Lorem ipsum
		</Modal>
	);

	expect(modal()).toHaveClass(expectedClasses);
});

test('should call onClose when Esc is pressed', async () => {
	const onClose = jest.fn();

	render(
		<Modal isOpen={true} onClose={onClose}>
			Lorem ipsum
		</Modal>
	);

	await user.keyboard('{Escape}');

	expect(onClose).toHaveBeenCalled();
});

test('should not call onClose when other key than Esc is pressed', async () => {
	const onClose = jest.fn();

	render(
		<Modal isOpen={true} onClose={onClose}>
			Lorem ipsum
		</Modal>
	);

	await user.keyboard('{Shift}');

	expect(onClose).not.toHaveBeenCalled();
});

test('should not close modal when clicking inside it', async () => {
	const onClose = jest.fn();

	const { container } = render(
		<Modal isOpen={true} onClose={onClose}>
			Lorem ipsum
		</Modal>
	);

	const dialog = container.querySelector('div[role="dialog"]');

	expect(screen.getByRole('dialog')).toBeInTheDocument();

	dialog && (await user.click(dialog));

	expect(onClose).not.toHaveBeenCalled();
});
