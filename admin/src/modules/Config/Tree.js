import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class Tree extends Component {
	constructor(props) {
		super(props);

		this.state = {
			treeData: [
				{ title: 'Chicken', children: [{ title: 'Egg' }] },
				{ title: 'Chicken', children: [{ title: 'Egg' }] },
				{ title: 'Chicken', children: [{ title: 'Egg' }] },
			],
		};
	}

	componentDidUpdate = (prevProps) => {
		console.log(this.props.items !== prevProps.items)
		if(this.props.items !== prevProps.items) {
			const treeData = JSON.parse(JSON.stringify(this.props.items).replace(/(dropdown)/g, 'children').replace(/(name)/g, 'title'))
			this.setState({treeData})
		}
	}

	render() {
		return (
			<div style={{ height: 400 }}>
				<button onClick={() => console.log(this.state.treeData)}>elo</button>
				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({ treeData })}
				/>
			</div>
		);
	}
}
