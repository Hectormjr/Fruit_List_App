import { combineReducers } from "redux";
import fruitsReducer from "./fruits/fruits.reducer";

const rootReducer = () =>
	combineReducers({
		fruits: fruitsReducer,
	});

export default rootReducer;
