import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import DropdownItem from '../DropdownItem';
import { ButtonProps } from '../Button';

const meta: Meta<typeof DropdownItem> = {
	component: DropdownItem,
	title: 'Dropdown/DropdownItem',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DropdownItem>;

export const Template: Story = {
	render: (args: ButtonProps) => <DropdownItem {...args} />,
};

export const Basic = {
	...Template,
};
