import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;