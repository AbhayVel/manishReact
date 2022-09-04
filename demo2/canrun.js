const redux = require('redux');
const initialValue = {
	data:0
}
const myReducer = (state = initialValue,action) => {

	if (action.type == 'add') {
		return {
			data: state.data + 1
		}
	}
	if (action.type == 'minus') {
		return {
			data: state.data - 1
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

store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'minus' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'minus' });
store.dispatch({ type: 'add' });
