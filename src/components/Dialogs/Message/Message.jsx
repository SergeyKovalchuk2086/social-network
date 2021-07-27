import './Message.css';

const Message = (props) => {
	return (
		<div className='message'>
			<div className='ava'>
				<img alt='avatar' src='https://im0-tub-ru.yandex.net/i?id=e708784c502029fd3580605e76109216-l&n=27&h=384&w=480' ></img>
			</div>
			<div className='text' >
				{props.message}
			</div>
		</div >
	)
}

export default Message;