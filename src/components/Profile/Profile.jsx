import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts data={props.data} />
		</div >
	)
};

export default Profile;