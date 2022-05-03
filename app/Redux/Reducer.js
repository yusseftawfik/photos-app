import * as actionTypes from "./Types";
const INITIAL_STATE = {
	loading: null,
	data: null,
	specificData: null,
};
const Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.DATA_FETCH_REQUESTED:
			return { ...state, loading: true };
		case actionTypes.DATA_FETCH_SUCCEEDED:
			return { ...state, data: action.data, loading: false };
		case actionTypes.SPECIFIC_DATA_REQUESTED:
			return { ...state, loading: true };
		case actionTypes.SPECIFIC_DATA_SUCCEEDED:
			return { ...state, specificData: action.specificData, loading: false };
		default:
			return state;
	}
};
export default Reducer;
