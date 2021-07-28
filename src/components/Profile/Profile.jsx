import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts data={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch} />
		</div >
	)
};

export default Profile;