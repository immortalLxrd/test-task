export const formActions = {
	CHANGE: "CHANGE"
};

export const formReducer = (state: Object, action: any) => {
	switch (action.type) {
		case (formActions.CHANGE):
			return {
				...state,
				[action.payload.name]: action.payload.value
			};
		default:
			return state;
	}
};