import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';

//компонента App
function App(props) {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route exact path='/dialogs' render={() => <DialogsContainer />} />
					<Route exact path='/profile' render={() => <Profile />} />
					<Route exact path='/friends' render={() => <Friends />} />
					<Route exact path='/users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;