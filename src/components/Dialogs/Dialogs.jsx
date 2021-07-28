import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs
		.map(d => <DialogItem name={d.name} id={d.id} />)

	let messagesElements = state.messages
		.map(m => <Message message={m.message} />)

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
		<div className='dialogs'>
			<div className='dialogs-items'>
				{dialogsElements}
			</div>
			<div className='messages'>
				<div>{messagesElements}</div>
				<div>
					<div><textarea value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder='Enter your message'></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;