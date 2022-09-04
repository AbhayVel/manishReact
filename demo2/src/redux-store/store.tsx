import { createStore } from '@reduxjs/toolkit'
/*
 * Store created in this file.
 */

const initialValue = {
	isLogin: false,
	userName: "",
	role: ""
}
// @typescript-eslint/default-param-last
const myReducer = (state = initialValue, action: any) => {
	if (action.type === 'login') {
		return {
			isLogin: true,
			userName: action.payload.userName,
			role: action.payload.role
		}
	}
	if (action.type === 'logout') {
		return {
			isLogin: false,
			userName: "",
			role: ""
		}
	}
	return state;
}
const store = createStore(myReducer)
export default store;