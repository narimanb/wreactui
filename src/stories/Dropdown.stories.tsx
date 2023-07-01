import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '../Dropdown';
import DropdownItem from '../DropdownItem';
import Button from '../Button';

const meta: Meta<typeof Dropdown> = {
	component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Template: Story = {
	render: (args: DropdownProps) => (
		<>
			<Button>Click to open</Button>
			<Dropdown {...args}>
				<DropdownItem>Hello</DropdownItem>
			</Dropdown>
		</>
	),
};
export const Basic = {
	...Template,
	parameters: {
		onClose: () => {},
		isOpen: false,
	},
};
