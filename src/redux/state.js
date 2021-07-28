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
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Where are you from?' },
			],
			dialogs: [
				{ id: 1, name: 'Sergey' },
				{ id: 2, name: 'Dmitriy' },
				{ id: 3, name: 'Alex' },
			],
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
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likeCount: 50
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}
}

export default store;
window.store = store;