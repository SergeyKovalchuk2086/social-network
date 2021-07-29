const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';


let initialState = {
	users:
		[
			// { id: 1, photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png', fullName: 'Sergey', status: 'Junior', location: { city: 'Tomsk', country: 'Russia' }, followed: false },

			// { id: 2, photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png', fullName: 'Dmitriy', status: 'Boss', location: { city: 'Tomsk', country: 'Russia' }, followed: true },

			// { id: 3, photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png', fullName: 'Alex', status: 'Dranik', location: { city: 'Tomsk', country: 'Russia' }, followed: false },
		]
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			};
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] }
		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;