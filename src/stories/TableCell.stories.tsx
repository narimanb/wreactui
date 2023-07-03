import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableCell, { TableCellProps } from '../TableCell';

const meta: Meta<typeof TableCell> = {
	component: TableCell,
	title: 'Table/TableCell',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableCell>;

export const Template: Story = {
	render: (args: TableCellProps) => <TableCell {...args} />,
};

export const Basic = {
	...Template,
};
