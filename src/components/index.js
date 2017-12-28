import React from 'react';
import { connect } from 'react-redux';
/*const StoryList = ({ stories }) => (
	<ul>
		{stories.map((story, index) => (<li key={index}>story.title</li>))}
	</ul>
);*/



const SearchBar = ({ onSubmit }) => {
	let input;
	return(
		<form onSubmit={e => {
			e.preventDefault();
			onSubmit(input);
			input.value=''
			}} >
			<label> Enter value to Search </label>
			<input type='text' ref={node => { input = node }} />
			<button type='submit'>
				Search
			</button>
		</form>
	);
};

const mainPage = ({ onSubmit }) => {
	return(
		<div>
			<SearchBar onSubmit={onSubmit}/>
			{/*<StoryList />*/}
		</div>
	)
};

export default mainPage;


