import React from 'react';
import { connect } from 'react-redux';

let SearchResults = ({ stories }) => {
	return(
		<ul>
			{stories.map((story, index) => (<li key={index}>{story.title} </li>))}
		</ul>
		);

};
const mapStateToProps = (state) => {
	console.log(`state is ${JSON.stringify(state)}`);
	const { currentSearch, data } = state;
	const relevantStoryData = data[currentSearch] || {};
	const storyList = relevantStoryData["stories"] || [];
	return {
		stories: storyList
	}
};
SearchResults = connect(mapStateToProps)(SearchResults);
export default SearchResults;