import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
	let postsElements = props.data
		.map(p => <Post message={p.message} likeCount={p.likeCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
	}

	return (
		<div className='postsBlock'>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}
						onChange={onPostChange}
						value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			<div className="posts">
				{postsElements}
			</div>
		</div>
	)
};

export default MyPosts;