import * as  actionTypes from './Types';

export const getData = (num = 21) => {
	return {
		type: actionTypes.DATA_FETCH_REQUESTED,
		num: num
	}
}
export const getDataByID = (id) => {
	return {
		type: actionTypes.SPECIFIC_DATA_REQUESTED,
		id: id
	}
}