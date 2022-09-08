import React from 'react';
import cl from './Input.module.scss'
import flagIcon from '../../../assets/icons/flags/ua.svg';
import arrowIcon from "../../../assets/icons/tel_arrow.svg"


const Input: React.FC<any> = ({tel, ...props}) => {
	return (
		<div className={cl.wrapper}>
			{tel && (
				<div className={cl.input__tel}>
					<img className={cl.flag_icon} src={flagIcon} alt=""/>
					<img className={cl.arrow_icon} src={arrowIcon} alt=""/>
				</div>
			)}
			<input className={cl.input} {...props}/>
		</div>
	);
};

export default Input;