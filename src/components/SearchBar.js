import React from 'react';
import { fetchData, safeFetch } from '../actions/networkActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let SearchBar = ({ onSubmit }) => {
	let input;
	return(
		<form onSubmit={e => {
			e.preventDefault();
			onSubmit(input.value);
		}} >
			<label> Enter value to Search </label>
			<input type='text' ref={node => { input = node }} />
			<button type='submit'>
				Search
			</button>
		</form>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (payload) => dispatch(safeFetch(payload))
	}
};
SearchBar = connect(null, mapDispatchToProps)(SearchBar);
export default SearchBar;