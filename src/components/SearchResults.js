import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let SearchResults = ({ stories }) => {
	return(
		<ul>
			{stories.map((story, index) => (<li key={index}>{story.title} </li>))}
		</ul>
		);

};
SearchResults.propTypes = {
	stories: PropTypes.arrayOf(PropTypes.shape({
		story: PropTypes.shape({
			title: PropTypes.string
		})
	}))
}
const mapStateToProps = (state) => {
	const { currentSearch, data } = state;
	const relevantStoryData = data[currentSearch] || {};
	const storyList = relevantStoryData["stories"] || [];
	return {
		stories: storyList
	}
};
SearchResults = connect(mapStateToProps)(SearchResults);
export default SearchResults;