let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likeCount: 15 },
			{ id: 2, message: 'It`s my first post!', likeCount: 20 },
			{ id: 2, message: 'My post', likeCount: 2 },
		],
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
}
export default state;