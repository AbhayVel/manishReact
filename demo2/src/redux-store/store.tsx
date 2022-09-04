import { createStore, createSlice, configureStore } from '@reduxjs/toolkit'

const initialValue = {
	isLogin: false,
	userName: "",
	role: ""
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initialValue,
	reducers: {
		login(state, action: any) {
			console.log(state);
			console.log("this is payload");
			console.log(action);
			debugger;
			state.isLogin = true;
			state.userName = action.payload.userName;
			state.role = action.payload.role;
			
		},
		logout(state, action: any) {
			state.isLogin = false;
			state.userName = "";
			state.role = "";
		}
	}
});

const theamSlice = createSlice({
	name: 'theam',
	initialState: { theam: 'light'}
,
	reducers: {
		setDefault(state, action: any) {
			return {
				theam: 'light'
			}
		},
		setDark(state, action: any) {
			return {
				theam: 'dark'
			}
		},
		setLight(state, action: any) {
			return {
				theam: 'light'
			}
		}
	}
});

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		theam: theamSlice.reducer
	}
})

export const authActions = authSlice.actions; 
export default store;
 


/*
 * Store created in this file.


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
 */