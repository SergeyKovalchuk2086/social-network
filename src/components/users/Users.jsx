import React from 'react';
import './Users.css';


let Users = (props) => {


	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png',
				fullName: 'Sergey',
				status: 'Junior',
				location: { city: 'Tomsk', country: 'Russia' },
				followed: false
			},
			{
				id: 2,
				photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png',
				fullName: 'Dmitriy',
				status: 'Boss',
				location: { city: 'Tomsk', country: 'Russia' },
				followed: true
			},
			{
				id: 3,
				photoUrl: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png',
				fullName: 'Alex',
				status: 'Dranik',
				location: { city: 'Tomsk', country: 'Russia' },
				followed: false
			},
		])
	}

	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className='user-photo' />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unFollow(u.id) }} >UnFollow</button>
							: <button onClick={() => { props.follow(u.id) }} >Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;