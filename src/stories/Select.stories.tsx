import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Select, { SelectProps } from '../Select';

const meta: Meta<typeof Select> = {
	component: Select,
	title: 'Components/Select',
	tags: ['autodocs'],
};
export default meta;

const BasicSelectOptions = () => (
	<>
		<option>Banana</option>
		<option>Apple</option>
		<option>Orange</option>
	</>
);

const MultiSelectOptions = () => (
	<>
		<option>Banana</option>
		<option>Apple</option>
		<option>Orange</option>
	</>
);

type Story = StoryObj<typeof Select>;

export const Template: Story = {
	render: (args: SelectProps) => <Select {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: <BasicSelectOptions />,
		disabled: false,
	},
};

export const MultiSelect = {
	...Template,
	parameters: {
		children: <MultiSelectOptions />,
		multiple: true,
		disabled: false,
	},
};
