import './Post.css';

function Post(props) {
	return (

		<div className="item1">
			<img src='https://pbs.twimg.com/profile_images/684975168708591616/8NVy-L16_400x400.jpg'></img>
			<div>
			Like {props.likeCount}
			</div>
			{props.message}
		</div>
	)
};

export default Post;