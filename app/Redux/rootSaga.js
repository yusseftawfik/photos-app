import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from './Types';

const API_KEY = '27142263-84571abe3b0315c24dd5f2bf3';
const URL = `https://pixabay.com/api/?key=${API_KEY}`;

function* dataWatcher () {
	yield takeLatest(actionTypes.DATA_FETCH_REQUESTED, fetchAllData);
	yield takeLatest(actionTypes.SPECIFIC_DATA_REQUESTED, fetchSpecificData);
}
function* fetchAllData (action) {
	const numOfItems = action.num
	const allData = yield fetch(`${URL}&per_page=${numOfItems}`)
		.then(response => response.json())
		.catch(err => console.log(err));
	yield put({
		type: actionTypes.DATA_FETCH_SUCCEEDED, data: allData.hits
	});
}
function* fetchSpecificData (action) {
	const id = action.id
	const dataByID = yield fetch(`${URL}&id=${id}`)
		.then(response => response.json())
		.catch(err => console.log(err));
	yield put({
		type: actionTypes.SPECIFIC_DATA_SUCCEEDED, specificData: dataByID.hits
	});
}
export default function* saga () {
	yield all([dataWatcher()]);
}