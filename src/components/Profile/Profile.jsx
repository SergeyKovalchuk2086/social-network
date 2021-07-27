import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts data={props.data} addPost={props.addPost} />
		</div >
	)
};

export default Profile;