import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from '../TableCell';

describe('TableCell', () => {
	it('should render without crashing', () => {
		render(
			<table>
				<tbody>
					<tr>
						<TableCell />
					</tr>
				</tbody>
			</table>
		);
	});

	it('should render with base styles', () => {
		const expected = 'px-4 py-3';
		render(
			<table>
				<tbody>
					<tr>
						<TableCell />
					</tr>
				</tbody>
			</table>
		);

		expect(screen.getByRole('cell').getAttribute('class')).toContain(expected);
	});
});
