import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableHeader, { TableHeaderProps } from '../TableHeader';

const meta: Meta<typeof TableHeader> = {
	component: TableHeader,
	title: 'Components/Table/TableHeader',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Template: Story = {
	render: (args: TableHeaderProps) => <TableHeader {...args} />,
};

export const Basic = {
	...Template,
};
