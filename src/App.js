import React, { Component } from "react"
import Header from "./components/Header"
import ItemList from "./components/ItemList"

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<ItemList />
			</div>
		)
	}
}

export default App