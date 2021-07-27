import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

	let dialogsElements = props.dialogs
		.map(d => <DialogItem name={d.name} id={d.id} />)

	let messagesElements = props.messages
		.map(m => <Message message={m.message} />)

	return (
		<div className='dialogs'>
			<div className='dialogs-items'>
				{dialogsElements}
			</div>
			<div className='messages'>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs; 