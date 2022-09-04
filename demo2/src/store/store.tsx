import { Action } from '@reduxjs/toolkit';
import redux from 'redux'

const myReducer = (state: unknown, action: Action) => {
	if (action.type === 'add') {

		return {
			data: state?.data+1
		}
	}
	return state;
}



const store = redux.createStore(myReducer)