import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
	let postsElements = props.data
		.map(p => <Post message={p.message} likeCount={p.likeCount} />)


	let newPostElement = React.createRef();

	let addPost = () => {

		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div className='postsBlock'>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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