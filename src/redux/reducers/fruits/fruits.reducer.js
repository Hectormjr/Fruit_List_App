import actionTypes from "./fruits.actionTypes";
import initialState from "./fruits.initialState";

const fruitsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.FRUITS_LOAD_START:
			return {
				...state,
				isLoading: true,
				fruits: null,
				errorMessage: null,
			};

		case actionTypes.FRUITS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				fruits: payload,
			};

		case actionTypes.FRUITS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default fruitsReducer;
