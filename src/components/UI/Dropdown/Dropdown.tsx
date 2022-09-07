import cl from "./Dropdown.module.scss";
import React, {useState} from "react";
import useToggle from "../../../hooks/useToggle";
import arrowIcon from "../../../assets/icons/arrow_down.svg"
import Radio from "../Radio/Radio";


type DropdownProps = {
	initialValue: string,
	radio?: boolean,
	name?: string,
	children: Array<React.ReactNode>
};

const Dropdown: React.FC<DropdownProps> = ({
											initialValue,
											radio,
											children,
											name,
											...props
										}) => {
	const [value, setValue] = useState(initialValue);
	const [isOpen, toggle] = useToggle(false);

	return (
		<div
			className={cl.select}
			onClick={toggle}
			defaultValue={value}
		>
			<div className={cl.field}>
				{value}
				<img className={cl.logo} src={arrowIcon} alt=""/>
			</div>
			{isOpen && (
				<ul className={cl.list}>
					<li className={cl.field}>
						{value}
						<img className={cl.logo} src={arrowIcon} alt=""/>
					</li>
					{
						children.map((item: any, i: number) => (
							<li
								className={cl.item}
								onClick={() => setValue(item.props.value)}
								key={i}
							>
								{radio &&
									(value !== item.props.value
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

export default Dropdown;
