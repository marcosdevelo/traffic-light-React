import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);
		let redExtra = "";
		if (this.state.clickedLight == "red") redExtra = "selected";
		let yellowExtra = "";
		if (this.state.clickedLight == "yellow") yellowExtra = "selected";
		let greenExtra = "";
		if (this.state.clickedLight == "green") greenExtra = "selected";
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={" red light " + redExtra}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={" yellow light " + yellowExtra}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={" green light " + greenExtra}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
