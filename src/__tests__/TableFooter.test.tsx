import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from '../TableFooter';
import Pagination from '../Pagination';
import Theme from '../themes/default';

const tableFooter = () => screen.getByTestId('footer');

test('should render without crashing', () => {
	render(<TableFooter data-testid="footer" />);

	expect(tableFooter()).toBeInTheDocument();
});

test('should render as tfoot element', () => {
	render(<TableFooter data-testid="footer" />);

	expect(screen.getByRole('rowgroup')).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.tableFooter.base;
	render(<TableFooter data-testid="footer" />);

	expect(tableFooter()).toHaveClass(expectedClasses);
});

test('should render with pagination', () => {
	const expectedPaginationClasses = Theme.pagination.base;
	render(
		<>
			<TableFooter data-testid="footer">
				<Pagination
					totalResults={10}
					resultsPerPage={4}
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onChange={() => {}}
					label="Table navigation"
				/>
			</TableFooter>
		</>
	);

	expect(tableFooter().firstChild).toHaveClass(expectedPaginationClasses);
});
