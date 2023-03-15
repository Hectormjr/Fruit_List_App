import FruitsService from "../../../services/fruits.service";
import actions from "./fruits.actions";

export const loadFruitsAsync = () => (dispatch) => {
	dispatch(actions.fruitsLoadStart());
	//similuando o loanding
	FruitsService.getAllFruits()
		.then((response) => dispatch(actions.fruitsLoadSuccess(response)))
		.catch((error) => dispatch(actions.fruitsLoadError(error.message)));



};
