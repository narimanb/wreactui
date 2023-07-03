import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableContainer, { TableContainerProps } from '../TableContainer';

const meta: Meta<typeof TableContainer> = {
	component: TableContainer,
	title: 'Table/TableContainer',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableContainer>;

export const Template: Story = {
	render: (args: TableContainerProps) => <TableContainer {...args} />,
};

export const Basic = {
	...Template,
};
