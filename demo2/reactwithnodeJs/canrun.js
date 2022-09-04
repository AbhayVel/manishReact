const redux = require('redux');
const initialValue = {
	isLogin: false,
	userName: "",
	role: ""
}
const myReducer = (state = initialValue, action) => {

	if (action.type == 'login') {
		return {
			isLogin: true,
			userName: action.payload.userName,
			role: action.payload.role
		}
	}
	if (action.type == 'logout') {
		return {
			isLogin: false,
			userName: "",
			role: ""
		}
	}
	return state;
}
const store = redux.createStore(myReducer)

const actionSubscriber = () => {
	var data = store.getState();
	console.log(data);
}

store.subscribe(actionSubscriber);

store.dispatch({ type: 'login', payload: { userName: "abhay", role: "admin" } });
store.dispatch({ type: 'logout' });
store.dispatch({ type: 'login', payload: { userName: "xx", role: "admin" } });
