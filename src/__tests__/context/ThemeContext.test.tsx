import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, ThemeContext } from '../../context/ThemeContext';

function TestButton() {
	const { toggleMode } = useContext(ThemeContext);

	return <button onClick={() => toggleMode()}>Click</button>;
}

describe('ThemeProvider', () => {
	it('should show value from provider', () => {
		const expected = 'Lorem';

		render(
			<ThemeProvider value={{ theme: 'Lorem' }}>
				<ThemeContext.Consumer>
					{(value) => <span role="provider">{value.theme}</span>}
				</ThemeContext.Consumer>
			</ThemeProvider>
		);

		// ASSERT
		expect(screen.getByRole('provider')).toHaveTextContent(expected);
	});

	it('should execute the toggleMode method', async () => {
		const user = userEvent.setup();
		const toggleMode = jest.fn();
		const theme = { test: 'test' };
		render(
			<ThemeContext.Provider value={{ toggleMode, theme }}>
				<TestButton />
			</ThemeContext.Provider>
		);

		const button = screen.getByRole('button');

		// simulate a user event
		await user.click(button);
		expect(toggleMode).toHaveBeenCalledTimes(1);
	});
});
