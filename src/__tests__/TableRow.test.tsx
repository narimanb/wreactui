import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from '../TableRow';

describe('TableRow', () => {
	it('should render without crashing', () => {
		render(
			<table>
				<tbody>
					<TableRow />
				</tbody>
			</table>
		);
	});

	it('should not have base styles', () => {
		const expected = '';
		render(
			<table>
				<tbody>
					<TableRow />
				</tbody>
			</table>
		);

		expect(screen.getByRole('row').getAttribute('class')).toBe(expected);
	});
});
