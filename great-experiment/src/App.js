import React from 'react';
import SessionS from './components/SessionS.js';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<SessionS />
			</div>
		);
	}
}
export default App;
