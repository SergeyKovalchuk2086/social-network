import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div >
	)
};

export default Profile;