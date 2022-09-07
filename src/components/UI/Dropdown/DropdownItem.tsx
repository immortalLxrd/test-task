import React from 'react';

type DropdownItemProps = {
	value: string | number,
	children: React.ReactNode | string
};

const DropdownItem: React.FC<DropdownItemProps> = ({value, children}) => {
	return (
		<option value={value}>
			{children}
		</option>
	);
};

export default DropdownItem;