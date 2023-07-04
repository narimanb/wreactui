import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableRow, { TableRowProps } from '../TableRow';

const meta: Meta<typeof TableRow> = {
	component: TableRow,
	title: 'Components/Table/TableRow',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableRow>;

export const Template: Story = {
	render: (args: TableRowProps) => <TableRow {...args} />,
};

export const Basic = {
	...Template,
};
