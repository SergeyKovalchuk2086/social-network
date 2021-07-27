import './MyPosts.css';
import Post from './Post/Post';

function MyPosts(props) {
	let postsElements = props.data
		.map(p => <Post message={p.message} likeCount={p.likeCount} />)

	return (
		<div className='postsBlock'>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className="posts">
				{postsElements}
			</div>
		</div>
	)
};

export default MyPosts;