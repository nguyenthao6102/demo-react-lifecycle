import "./App.css";
import Counter from "./components/Counter";

import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showCounter: true,
		};
	}

	componentDidUpdate() {
		console.log("App update");
	}
	removeCounter() {
		this.setState({
			showCounter: false,
		});
	}
	render() {
		console.log("App render");
		return (
			<div className="Counter">
				<button onClick={() => this.removeCounter()}>Remove counter</button>
				{this.state.showCounter && <Counter />}
			</div>
		);
	}
}
