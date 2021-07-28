const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likeCount: 15 },
				{ id: 2, message: 'It`s my first post!', likeCount: 20 },
				{ id: 3, message: 'My post', likeCount: 2 },
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Sergey' },
				{ id: 2, name: 'Dmitriy' },
				{ id: 3, name: 'Alex' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Where are you from?' },
			],
			newMessageBody: ''
		}
	},

	_callSubscriber() {
		console.log('State was changed');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'ADD_POST') {
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likeCount: 50
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 6, message: body });
			this._callSubscriber(this._state);
		}
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

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE
	}
}

export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
}

export default store;
window.store = store;