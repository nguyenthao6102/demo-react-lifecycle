import React, { Component } from "react";

export default class Counter extends Component {
	constructor(props) {
		console.log("Count contructor");
		super(props);

		this.state = {
			count: 0,
		};
	}
	increase() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	decrease() {
		this.setState({
			count: this.state.count - 1,
		});
	}
	render() {
		console.log("Count render");
		return (
			<div className="Counter">
				<button onClick={() => this.decrease()}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.increase()}>+</button>
			</div>
		);
	}
	componentDidMount() {
		console.log("Count did mount");
	}
	componentDidUpdate() {
		console.log("Count did update");
	}
	componentWillUnmount() {
		console.log("Count will unmount");
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count === nextState.count) {
			return false;
		}
		return true;
	}
}
