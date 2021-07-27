import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewpostText } from './redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode >
			<App state={state} addPost={addPost} updateNewPostText={updateNewpostText} />
		</React.StrictMode >,
		document.getElementById('root')
	);
}