import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '../Dropdown';

const meta: Meta<typeof Dropdown> = {
	component: Dropdown,
	title: 'Components/Dropdown/Dropdown',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Template: Story = {
	render: (args: DropdownProps) => <Dropdown {...args} />,
};
export const Basic = {
	...Template,
};
