import React from 'react';
import cl from './Button.module.scss';

const Button: React.FC<any> = ({children, className, ...props}) => {
	const rootClasses = [cl.button];
	if (className) rootClasses.push(className);

	return (
		<button className={rootClasses.join(' ')} {...props}>{children}</button>
	);
};

export default Button;