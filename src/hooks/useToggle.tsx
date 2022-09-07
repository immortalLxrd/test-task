import {useReducer} from "react";

const useToggle: (initialState: boolean) => [boolean, () => void] =
	(initialState = false) => {
		const [value, toggleValue] = useReducer((value) => !value, initialState);
		return [value, toggleValue];
	};

export default useToggle;
