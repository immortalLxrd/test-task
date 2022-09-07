import React from 'react';
import cl from './Radio.module.scss';

type RadioProps = {
	active?: boolean
};

const Radio: React.FC<RadioProps> = ({active}) => {

	const rootClasses = [cl.radio];
	if (active) rootClasses.push(cl.radio_active);

	return (
		<div className={rootClasses.join(' ')}/>
	);
};

export default Radio;