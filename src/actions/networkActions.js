import {
	FETCH_SUBREDDIT_REQUEST,
	RECEIVE_SUBREDDIT_ERROR,
	RECEIVE_SUBREDDIT_RESPONSE
} from './actionTypes';
import fetch from 'cross-fetch';
import { selectSubReddit } from './userActions';
export const sendRequest = (subreddit) => ({
	type: FETCH_SUBREDDIT_REQUEST,
	subreddit
});

export const receiveResponse = (subreddit, posts) => ({
	type: RECEIVE_SUBREDDIT_RESPONSE,
	subreddit,
	posts,
	receivedAt: Date.now()
})

// Async action creators
export const fetchData = (subreddit) => (dispatch) => {
	// Letting every one know Request has been started
	dispatch(sendRequest(subreddit));
	dispatch(selectSubReddit(subreddit));
	return fetch(`https://hn.algolia.com/api/v1/search?query=${subreddit}&tags=story`)
		.then(response => response.json())
		.then(({ hits }) => {
			const results = hits.map(({ title, url, author, objectID}) => ({ title, url, author, objectID}));
			dispatch(receiveResponse(subreddit, results));
		})
};

