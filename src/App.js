import React, { Component } from "react"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import Loading from "./components/Loading"

class App extends Component {
	state = {
		status: 'idle',
		loading: false,
		search: '',
		data: [],
	}

	// componentDidMount = () => {
	// 	this.getData('halim13')
	// }

	getData = (user) => {
		this.setState({loading: true})
		fetch(`https://api.github.com/users/${user}/repos`)
			.then((respose) => respose.json())
			.then((respose) => {
				this.setState({data: respose, loading: false, status: 'ready'})
			})
			.catch(() => {
				this.setState({loading: false, status: 'error'})
			})
	}

	changeData = () => this.getData(this.state.search)

	setSearch = (user) => this.setState({ search: user })

	render() {
		const { data, loading } = this.state

		return(
			<div>
				<Header onClick={this.changeData} setSearch={(dataSearch) => this.setSearch(dataSearch)} />
				{!!loading && <span className="loading"><Loading /></span>}
				{
					(!!data.length && !loading) ? <ItemList data={data} /> : loading ? '' : <p style={{ textAlign: 'center' }}>No Data!</p>
				}
			</div>
		)
	}
}

export default App