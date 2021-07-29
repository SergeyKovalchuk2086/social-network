const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
	posts:
		[
			{ id: 1, message: 'Hi, how are you?', likeCount: 15 },
			{ id: 2, message: 'It`s my first post!', likeCount: 20 },
			{ id: 3, message: 'My post', likeCount: 2 },
		],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				message: state.newPostText,
				likeCount: 50
			};

			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		default:
			return state;
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}

export default profileReducer;