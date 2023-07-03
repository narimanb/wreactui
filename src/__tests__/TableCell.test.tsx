import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from '../TableCell';
import Theme from '../themes/default';

const tableCell = () => screen.getByTestId('tcell');

test('should render without crashing', () => {
	render(
		<>
			<table>
				<tbody>
					<tr>
						<TableCell data-testid="tcell" />
					</tr>
				</tbody>
			</table>
		</>
	);

	expect(tableCell()).toBeInTheDocument();
});

test('should render as td element', () => {
	render(
		<>
			<table>
				<tbody>
					<tr>
						<TableCell />
					</tr>
				</tbody>
			</table>
		</>
	);

	expect(screen.getByRole('cell')).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.tableCell.base;
	render(
		<>
			<table>
				<tbody>
					<tr>
						<TableCell data-testid="tcell" />
					</tr>
				</tbody>
			</table>
		</>
	);

	expect(tableCell()).toHaveClass(expectedClasses);
});
