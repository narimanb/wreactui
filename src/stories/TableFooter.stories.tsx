import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TableFooter, { TableFooterProps } from '../TableFooter';

const meta: Meta<typeof TableFooter> = {
	component: TableFooter,
	title: 'Components/Table/TableFooter',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Template: Story = {
	render: (args: TableFooterProps) => <TableFooter {...args} />,
};

export const Basic = {
	...Template,
};
