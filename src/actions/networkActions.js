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
	// Setting up the current SubReddit to current searched Item
	dispatch(selectSubReddit(subreddit));
	return fetch(`https://hn.algolia.com/api/v1/search?query=${subreddit}&tags=story`)
		.then(response => response.json())
		.then(({ hits }) => {
			const results = hits.map(({ title, url, author, objectID}) => ({ title, url, author, objectID}));
			// Letting store know that response is received
			dispatch(receiveResponse(subreddit, results));
		})
};

export const subRedditExistsInCache = (subreddit, { data }) => data.hasOwnProperty(subreddit);

export const safeFetch = (subreddit) => (dispatch, getState) => {
	// Set the current sub Reddit to search Item
	dispatch(selectSubReddit(subreddit));
	// Look for data already exists in history, to avoid request over wire
   // if data exists then just dispatch - receive response with data or else dispatch fetchData with subreddit
	if (subRedditExistsInCache(subreddit, state)) {
		const results = state.data[subreddit].stories;
		dispatch(receiveResponse(subreddit, results))
	} else {
		dispatch(fetchData(subreddit));
	}
}
