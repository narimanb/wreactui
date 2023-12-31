import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
	function CardBody(props, ref) {
		const { className, children, ...other } = props;
		const {
			theme: { cardBody },
		} = useContext(ThemeContext);

		const baseStyle = cardBody.base;

		const cls = classNames(baseStyle, className);

		return (
			<div className={cls} ref={ref} {...other}>
				{children}
			</div>
		);
	}
);

export default CardBody;
