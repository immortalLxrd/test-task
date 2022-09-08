import React from 'react';


type DropdownItemProps = {
	value: string | number,
	children: React.ReactNode | string
};

const SelectItem: React.FC<DropdownItemProps> = ({value, children}) => {
	return (
		<option value={value}>
			{children}
		</option>
	);
};


export default SelectItem;