import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from '../TableRow';

const tableRow = () => screen.getByTestId('trow');

test('should render without crashing', () => {
	render(
		<>
			<table>
				<tbody>
					<TableRow data-testid="trow" />
				</tbody>
			</table>
		</>
	);

	expect(tableRow()).toBeInTheDocument();
});

test('should render as tr element', () => {
	render(
		<>
			<table>
				<tbody>
					<TableRow />
				</tbody>
			</table>
		</>
	);

	expect(screen.getByRole('row')).toBeInTheDocument();
});

test('should not have base styles', () => {
	const expectedClasses = '';
	render(
		<>
			<table>
				<tbody>
					<TableRow data-testid="trow" />
				</tbody>
			</table>
		</>
	);

	expect(tableRow().getAttribute('class')).toBe(expectedClasses);
});
