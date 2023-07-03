import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableBody, { TableBodyProps } from '../TableBody';

const meta: Meta<typeof TableBody> = {
	component: TableBody,
	title: 'Table/TableBody',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableBody>;

export const Template: Story = {
	render: (args: TableBodyProps) => <TableBody {...args} />,
};

export const Basic = {
	...Template,
};
