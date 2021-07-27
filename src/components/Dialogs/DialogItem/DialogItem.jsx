import { NavLink } from 'react-router-dom';
import './DialogItem.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className='dialog'>
			<NavLink to={path} className='name'>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;