import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

const pagination = () => screen.getByTestId('test');

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
