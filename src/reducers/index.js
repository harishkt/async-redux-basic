import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes'


export const currentSearch = (state = null, action) => {
	switch(action.type) {
		case actionTypes.SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state;
	}
};

export const posts = (state  = { isFetching: false, isRefreshed: false, stories: [] }, action) => {
	switch(action.type) {
		case actionTypes.FETCH_SUBREDDIT_REQUEST:
			return Object.assign({}, state, { isFetching: true, isRefreshed: false });
		case actionTypes.REFRESH_SUBREDDIT:
			return Object.assign({}, state, { isRefreshed: true });
		case actionTypes.RECEIVE_SUBREDDIT_RESPONSE:
			return Object.assign({}, state, {
				isFetching: false,
				isRefreshed: false,
				stories: action.posts
			});
		default:
			return state;
	}
};

export const data = (state = {}, action) => {
	switch(action.type) {
		case actionTypes.FETCH_SUBREDDIT_REQUEST:
		case actionTypes.REFRESH_SUBREDDIT:
		case actionTypes.RECEIVE_SUBREDDIT_RESPONSE:
			return Object.assign(
				{}, state, { [action.subreddit]: posts(state[action.subreddit], action) });
		default:
			return state;
	}
};


const rootReducer = combineReducers({
	currentSearch,
	data
});
export default rootReducer;


