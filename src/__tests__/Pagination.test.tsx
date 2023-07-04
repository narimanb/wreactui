import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination, { NavigationButton } from '../Pagination';

const pagination = () => screen.getByTestId('test');
const user = userEvent.setup();

test('should render without crashing', () => {
	const onChange = jest.fn();
	render(
		<Pagination
			totalResults={123}
			label="Navigation"
			onChange={onChange}
			data-testid="test"
		/>
	);

	expect(pagination()).toBeInTheDocument();
});

test('should contain "Previous" aria-label based on directionIcon', () => {
	const onClick = jest.fn();
	const expected = 'Previous';

	render(<NavigationButton directionIcon="prev" onClick={onClick} />);

	expect(screen.getByRole('button').getAttribute('aria-label')).toContain(
		expected
	);
});

test('should contain "Next" aria-label based on directionIcon', () => {
	const onClick = jest.fn();
	const expected = 'Next';

	render(<NavigationButton directionIcon="next" onClick={onClick} />);

	expect(screen.getByRole('button').getAttribute('aria-label')).toContain(
		expected
	);
});

test('should contain a child SVG', () => {
	const onClick = jest.fn();
	render(<NavigationButton directionIcon="prev" onClick={onClick} />);

	expect(screen.getByRole('button').firstChild?.nodeName).toBe('svg');
});

test('should call onClick', async () => {
	const onClick = jest.fn();

	render(<NavigationButton directionIcon="next" onClick={onClick} />);

	await user.click(screen.getByRole('button'));

	expect(onClick).toHaveBeenCalledTimes(1);
});
