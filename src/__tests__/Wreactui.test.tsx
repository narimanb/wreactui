import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import Wreactui from '../Wreactui';
import { WreactuiContext } from '../index';

function TestButton() {
	const { toggleMode } = useContext(WreactuiContext);

	return <button onClick={toggleMode}>Click</button>;
}

describe('Wreactui Context', () => {
	beforeEach(() => {
		document.documentElement.className = '';
	});

	it('should use defaultTheme styles', () => {
		const expected =
			'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none';
		render(
			<Wreactui>
				<Button />
			</Wreactui>
		);

		expect(screen.getByRole('button').getAttribute('class')).toContain(
			expected
		);
	});

	it('should extend theme', () => {
		const expected = 'bg-red-600';
		const theme = {
			button: {
				base: 'bg-red-600',
			},
		};
		render(
			<Wreactui theme={theme}>
				<Button />
			</Wreactui>
		);

		expect(screen.getByRole('button').getAttribute('class')).toContain(
			expected
		);
	});

	it('should add light class to html element if usePreferences is present', () => {
		const expected = 'light';
		render(
			<Wreactui usePreferences>
				<Button />
			</Wreactui>
		);

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});

	it('should not add any class to html element if usePreferences is ausent', () => {
		const expected = '';
		render(
			<Wreactui>
				<Button />
			</Wreactui>
		);

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});

	it('should execute the toggleTheme method', async () => {
		const expected = 'dark';
		render(
			<Wreactui usePreferences>
				<TestButton />
			</Wreactui>
		);

		const user = userEvent.setup();
		await user.click(screen.getByRole('button'));

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});

	it('should add dark theme based on users preference', () => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn(() => {
				return {
					matches: true,
					addEventListener: jest.fn(),
					removeEventListener: jest.fn(),
				};
			}),
		});

		const expected = 'dark';
		render(
			<Wreactui usePreferences>
				<Button />
			</Wreactui>
		);

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});

	it('should add dark theme class to html element', () => {
		const expected = 'dark';
		render(
			<Wreactui dark>
				<Button />
			</Wreactui>
		);

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});

	it('should add dark theme class to html element when usePreferences is enabled', () => {
		const expected = 'dark';
		render(
			<Wreactui dark usePreferences>
				<Button />
			</Wreactui>
		);

		expect(document.documentElement.getAttribute('class')).toBe(expected);
	});
});
