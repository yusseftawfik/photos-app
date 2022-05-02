import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from './Types';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		'X-RapidAPI-Key': '83a2181f05mshab8f57a6e1625a5p1bc7dejsn821f665ddca9'
	}
};
function* dataWatcher () {
	yield takeLatest(actionTypes.DATA_FETCH_REQUESTED, fetchAllData);
	yield takeLatest(actionTypes.SPECIFIC_DATA_REQUESTED, fetchSpecificData);
}
function* fetchAllData (action) {
	const numOfItems = action.num
	const allData = yield fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=539725&limit=${numOfItems}`, options)
		.then(response => response.json())
		.catch(err => err);
	yield put({
		type: actionTypes.DATA_FETCH_SUCCEEDED, data: allData.data
	});
}
function* fetchSpecificData (action) {
	const id = action.id
	const dataByID = yield fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`, options)
		.then(response => response.json())
		.catch(err => err);
	yield put({
		type: actionTypes.SPECIFIC_DATA_SUCCEEDED, specificData: dataByID.data
	});
}
export default function* saga () {
	yield all([dataWatcher()]);
}
