import actionTypes from "./fruits.actionTypes";

const fruitsLoadStart = () => ({
	type: actionTypes.FRUITS_LOAD_START,
});

const fruitsLoadSuccess = (fruits) => ({
	type: actionTypes.FRUITS_LOAD_SUCCESS,
	payload: fruits,
});

const fruitsLoadError = (errorMessage) => ({
	type: actionTypes.FRUITS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	fruitsLoadStart,
	fruitsLoadSuccess,
	fruitsLoadError,
};
