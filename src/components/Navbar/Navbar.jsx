import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="nav">
			<ul>
				<li className="item">
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li className="item">
					<NavLink to="/dialogs">Messages</NavLink>
				</li>
				<li className="item">
					<NavLink to="/friends">Friends</NavLink>
				</li>
				<li className="item">
					<NavLink to="#">Music</NavLink>
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;