import React from 'react';
import cl from './Button.module.scss';

const Button: React.FC<any> = ({children, ...props}) => {
	return (
		<button className={cl.button} {...props}>{children}</button>
	);
};

export default Button;