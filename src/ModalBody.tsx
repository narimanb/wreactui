import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
	function ModalBody(props, ref) {
		const { children, className, ...other } = props;
		const {
			theme: { modalBody },
		} = useContext(ThemeContext);

		const baseStyle = modalBody.base;

		const cls = classNames(baseStyle, className);

		return (
			<div className={cls} ref={ref} {...other}>
				{children}
			</div>
		);
	}
);

export default ModalBody;
