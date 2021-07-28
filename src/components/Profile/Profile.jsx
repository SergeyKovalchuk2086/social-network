import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store}
				// data={props.profilePage.posts}
				// newPostText={props.profilePage.newPostText}
				// dispatch={props.dispatch}
			/>
		</div >
	)
};

export default Profile;