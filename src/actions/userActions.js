import {
	SELECT_SUBREDDIT,
	REFRESH_SUBREDDIT
} from './actionTypes';

export const selectSubReddit = (subreddit) =>  ({
		type: SELECT_SUBREDDIT,
		subreddit
	});

export const refreshSubReddit = (subreddit) => ({
	type: REFRESH_SUBREDDIT,
	subreddit
});