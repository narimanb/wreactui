import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination, {
	NavigationButton,
	PageButton,
	EmptyPageButton,
} from '../Pagination';
import Theme from '../themes/default';

const pagination = () => screen.getByTestId('test');
const user = userEvent.setup();

// Pagination

test('Pagination should render without crashing', () => {
	const onChange = jest.fn();

	render(
		<Pagination totalResults={123} onChange={onChange} data-testid="test" />
	);

	expect(pagination()).toBeInTheDocument();
});

test('Pagination should render with base styles', () => {
	const onChange = jest.fn();
	const expectedClasses = Theme.pagination.base;

	render(
		<Pagination totalResults={123} onChange={onChange} data-testid="test" />
	);

	expect(pagination()).toHaveClass(expectedClasses);
});

test('Pagination should contain a summary by default', () => {
	const onChange = jest.fn();

	render(
		<Pagination totalResults={123} onChange={onChange} data-testid="test" />
	);

	expect(within(pagination()).getByText(/Showing/i)).toBeInTheDocument();
});

test('Pagination should contain a summary', () => {
	const onChange = jest.fn();
	render(
		<Pagination
			showSummary={true}
			totalResults={123}
			onChange={onChange}
			data-testid="test"
		/>
	);

	expect(within(pagination()).getByText(/Showing/i)).toBeInTheDocument();
});

test('Pagination should not contain a summary', () => {
	const onChange = jest.fn();

	render(
		<Pagination
			showSummary={false}
			totalResults={123}
			onChange={onChange}
			data-testid="test"
		/>
	);

	expect(within(pagination()).queryByText(/Showing/i)).not.toBeInTheDocument();
});

test('Pagination should render next and previous buttons', () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={123} onChange={onChange} />
	);

	expect(container.querySelector('button[aria-label="Next"]')).toBeTruthy();
	expect(container.querySelector('button[aria-label="Previous"]')).toBeTruthy();
});

test('Pagination should render a list with exact children', () => {
	const onChange = jest.fn();
	const expected = 7;

	render(
		<Pagination totalResults={50} onChange={onChange} data-testid="test" />
	);

	expect(within(pagination()).getByRole('list').childElementCount).toBe(
		expected
	);
});

test('Pagination should never render a list with more than 9 children', () => {
	const onChange = jest.fn();
	// accounts for 2 nav buttons
	const expected = 9;

	render(
		<Pagination totalResults={120} onChange={onChange} data-testid="test" />
	);

	expect(within(pagination()).getByRole('list').childElementCount).toBe(
		expected
	);
});

test('should call click handler on next button', async () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={30} resultsPerPage={5} onChange={onChange} />
	);

	const nextButton = container.querySelector('button[aria-label="Next"]');

	nextButton && (await user.click(nextButton));

	// one on render and another on click
	expect(onChange).toHaveBeenCalledTimes(2);
});

test('should call click handler on prev button', async () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={30} resultsPerPage={5} onChange={onChange} />
	);

	const nextButton = container.querySelector('button[aria-label="Next"]');
	// go forward one page to activate prev button
	nextButton && (await user.click(nextButton));

	const prevButton = container.querySelector('button[aria-label="Previous"]');
	// click the active prev button
	prevButton && (await user.click(prevButton));

	// one on render, one on next and another on prev
	expect(onChange).toHaveBeenCalledTimes(3);
});

test('should not call click handler on prev button if first page', async () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={30} resultsPerPage={5} onChange={onChange} />
	);

	const prevButton = container.querySelector('button[aria-label="Previous"]');
	prevButton && (await user.click(prevButton));

	// one on render
	expect(onChange).toHaveBeenCalledTimes(1);
});

test('should not call click handler on next button if last page', async () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={10} resultsPerPage={5} onChange={onChange} />
	);

	const nextButton = container.querySelector('button[aria-label="Next"]');
	// double click
	nextButton && (await user.dblClick(nextButton));

	// one on render and one of the above clicks are ignored
	expect(onChange).toHaveBeenCalledTimes(2);
});

test('should call click handler on prev button', async () => {
	const onChange = jest.fn();

	const { container } = render(
		<Pagination totalResults={30} resultsPerPage={5} onChange={onChange} />
	);

	const nextButton = container.querySelector('button[aria-label="Next"]');
	// go forward one page to activate prev button
	nextButton && (await user.click(nextButton));

	const prevButton = container.querySelector('button[aria-label="Previous"]');
	// click the active prev button
	prevButton && (await user.click(prevButton));

	// one on render, one on next and another on prev
	expect(onChange).toHaveBeenCalledTimes(3);
});

// NavigationButton

test('NavigationButton should render without crashing', () => {
	const onClick = jest.fn();
	render(<NavigationButton directionIcon="prev" onClick={onClick} />);

	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('NavigationButton should contain "Previous" aria-label based on directionIcon', () => {
	const onClick = jest.fn();
	const expected = 'Previous';

	render(<NavigationButton directionIcon="prev" onClick={onClick} />);

	expect(screen.getByRole('button').getAttribute('aria-label')).toContain(
		expected
	);
});

test('NavigationButton should contain "Next" aria-label based on directionIcon', () => {
	const onClick = jest.fn();
	const expected = 'Next';

	render(<NavigationButton directionIcon="next" onClick={onClick} />);

	expect(screen.getByRole('button').getAttribute('aria-label')).toContain(
		expected
	);
});

test('NavigationButton should contain a child SVG', () => {
	const onClick = jest.fn();
	render(<NavigationButton directionIcon="prev" onClick={onClick} />);

	expect(screen.getByRole('button').firstChild?.nodeName).toBe('svg');
});

test('NavigationButton should call onClick', async () => {
	const onClick = jest.fn();

	render(<NavigationButton directionIcon="next" onClick={onClick} />);

	await user.click(screen.getByRole('button'));

	expect(onClick).toHaveBeenCalledTimes(1);
});

// PageButton

test('PageButton should render without crashing', () => {
	const onClick = jest.fn();
	render(<PageButton page={1} onClick={onClick} />);

	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('PageButton should render the right page', () => {
	const onClick = jest.fn();
	const expected = '1';
	render(<PageButton isActive page={1} onClick={onClick} />);

	expect(screen.getByRole('button').textContent).toBe(expected);
});

test('PageButton should call onClick', async () => {
	const onClick = jest.fn();

	render(<PageButton page={1} onClick={onClick} />);

	await user.click(screen.getByRole('button'));

	expect(onClick).toHaveBeenCalledTimes(1);
});

// EmptyPageButton

test('EmptyPageButton should render without crashing', () => {
	render(<EmptyPageButton />);

	const { container } = render(<EmptyPageButton />);

	expect(container.querySelector('span')).toBeInTheDocument();
});

test('EmptyPageButton should render three dots as children', () => {
	const expected = '...';

	const { container } = render(<EmptyPageButton />);

	expect(container.querySelector('span')?.textContent).toContain(expected);
});
