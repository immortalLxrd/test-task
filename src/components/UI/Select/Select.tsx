import cl from "./Select.module.scss";
import React, {useState} from "react";
import useToggle from "../../../hooks/useToggle";
import arrowIcon from "../../../assets/icons/arrow_down.svg"
import Radio from "../Radio/Radio";


type DropdownProps = {
	initialValue: string,
	radio?: boolean,
	name?: string,
	onChange?: any,
	children: Array<React.ReactNode>,
};

const Select: React.FC<DropdownProps> = ({
											 onChange = () => null,
											 initialValue,
											 radio,
											 children,
											 name,
											 ...props
										 }) => {
	const [value, setValue] = useState({value: null, content: initialValue});
	const [isOpen, toggle] = useToggle(false);

	const handleClick = (item: any) => {
		setValue({value: item.props.value, content: item.props.children});
		onChange(name, item.props.value);
	};

	return (
		<div
			className={cl.select}
			onClick={toggle}
		>
			<div className={cl.select__field}>
				{value.content}
				<img className={cl.select__icon} src={arrowIcon} alt=""/>
			</div>
			{isOpen && (
				<ul className={cl.select__dropdown}>
					<li className={cl.select__field}>
						{value.content}
						<img className={cl.select__icon} src={arrowIcon} alt=""/>
					</li>
					{
						children.map((item: any, i: number) => (
							<li
								className={cl.select__item}
								onClick={() => handleClick(item)}
								key={i}
							>
								{radio &&
									(value.value !== item.props.value
										? (<Radio/>)
										: (<Radio active/>))}
								{item.props.children}
							</li>
						))
					}
				</ul>
			)}
		</div>
	);
};

export default Select;
