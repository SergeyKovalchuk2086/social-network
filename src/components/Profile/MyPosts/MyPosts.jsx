import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
	let postsElements = props.data
		.map(p => <Post message={p.message} likeCount={p.likeCount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
		// props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		// let action = updateNewPostTextActionCreator(text);
		// props.dispatch(action);
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
					<button onClick={onAddPost}>Add Post</button>
				</div>
			</div>
			<div className="posts">
				{postsElements}
			</div>
		</div>
	)
};

export default MyPosts;