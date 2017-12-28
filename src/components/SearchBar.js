import React from 'react';
import { fetchData, safeFetch } from '../actions/networkActions';
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

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (payload) => dispatch(safeFetch(payload))
	}
};
SearchBar = connect(null, mapDispatchToProps)(SearchBar);
export default SearchBar;