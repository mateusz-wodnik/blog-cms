import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Config.css'
import { convert, reverseConvert } from '../../_utils/tree'
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import { removeNodeAtPath } from 'react-sortable-tree'
import SortableTree from 'react-sortable-tree';
import Menu from './Menu'
import ImageChange from './ImageChange'



class Config extends Component {
	state = {
		menu: [],
	}

	componentDidMount = () => {
		// Fetch config from database
		fetch('/api/config/')
			.then(res => res.json())
			.then(config => this.setState({...config}))
			.catch(console.error)
	}

	handleMenuChange = (treeData) => {
		// Convert treeData to proper database, initial format
		const menu = convert(treeData)
		return this.setState({menu})
	}


	handleMenuConfirm = () => {
		// Update menu changes on confirm button click using actual menu state
		fetch('/api/config/menu', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.menu)
		}).then(res => this.setState({menu: this.state.menu}))
			.catch(console.error)
	}

	/**
	 * Create new menu item on submit
	 */
	handleAddMenuItem = (e) => {
		e.preventDefault()
		const { name, link } = e.target
		const item = { name: name.value, link: link.value }
		this.setState({ menu: [...this.state.menu, item] })
	}

	handleImage = (e) => {
		// const preserve value for FileReader async .onload method
		const target = e.target
		const { files, dataset } = target
		const fileName = dataset.file
		
		const fReader = new FileReader()
		fReader.onload = () => target.parentNode.style.backgroundImage = `url(${fReader.result})`;
		
		const body = new FormData()
		body.append('logo', files[0], fileName)

		fetch(`/api/config/images`, {
			method: "POST",
			body
		})
			.then(res => res.json())
			.then(res => fReader.readAsDataURL(files[0]))
			.catch(err => console.error(err))
	}

	render() {
		const { menu } = this.state
		const { handleImage, handleAddMenuItem, handleMenuChange, handleMenuConfirm } = this
		const treeData = reverseConvert(menu)
		
		return(
			<main className="admin__config config">
				<Menu handleAddMenuItem={handleAddMenuItem} >
					<SortableTree 
						className="menu__tree"
						treeData={treeData}
						onChange={data => handleMenuChange(data)}
						getNodeKey={item => item.node._id}
						generateNodeProps={rowInfo => ({
							buttons: [
								<button className="btn btn-danger" 
									onClick={() => handleMenuChange(removeNodeAtPath({
										treeData: treeData,
										path: rowInfo.path,
										getNodeKey: info => info.node._id
									}))}
								>Delete</button>
							]
						})}
					/>
					<button className="btn btn-success menu__confirm" onClick={handleMenuConfirm}>Confirm</button>
				</Menu>
				<form className="config__form" >
					<ImageChange handleImage={handleImage} label="Site logo" name="logo" file="logo.jpg" />
					<ImageChange handleImage={handleImage} label="Site icon" name="icon" file="icon.png" />
					<ImageChange handleImage={handleImage} label="Background" name="background" file="background.jpg" />
					<ImageChange handleImage={handleImage} label="Admin avatar" name="avatar" file="avatar.jpg" />
				</form>
			</main>
		)
	}
}

export default Config