import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/homepage.component'

const Hatspage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	)
}

const Jacketspage = () => {
	return (
		<div>
			<h1>Jackets Page</h1>
		</div>
	)
}

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/hats' component={Hatspage} />
					<Route path='/jackets' component={Jacketspage} />
				</Switch>
			</div>
		)
	}
}

export default App
