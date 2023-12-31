import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableRowProps
	extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
	function TableRow(props, ref) {
		const { className, children, ...other } = props;

		const {
			theme: { tableRow },
		} = useContext(ThemeContext);

		const baseStyle = tableRow.base;

		const cls = classNames(baseStyle, className);

		return (
			<tr className={cls} ref={ref} {...other}>
				{children}
			</tr>
		);
	}
);

export default TableRow;
