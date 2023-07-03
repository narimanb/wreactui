import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

export interface TableContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(
	function TableContainer(props, ref) {
		const { className, children, ...other } = props;

		const {
			theme: { tableContainer },
		} = useContext(ThemeContext);

		const baseStyle = tableContainer.base;

		const cls = classNames(baseStyle, className);

		return (
			<div className={cls} ref={ref} {...other}>
				{children}
			</div>
		);
	}
);

export default TableContainer;
