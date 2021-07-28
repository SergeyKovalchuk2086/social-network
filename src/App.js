import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

//компонента App
function App(props) {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route exact path='/dialogs' render={() => <DialogsContainer
						// dialogs={props.state.dialogsPage.dialogs}
						// messages={props.state.dialogsPage.messages}
						// state={props.state.dialogsPage}
						store={props.store} />} />
					<Route exact path='/profile' render={() => <Profile
						// profilePage={props.state.profilePage}
						// dispatch={props.dispatch}
						store={props.store} />} />
					<Route exact path='/friends' render={() => <Friends />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;