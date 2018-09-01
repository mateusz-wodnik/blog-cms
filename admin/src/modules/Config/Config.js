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
		img: '',
		logo: '',
		icon: '',
		menu: [],
		menuItems: []
	}

	componentDidMount = () => {
		fetch('/api/config/')
			.then(res => {
				console.log(res)
				return res.json()
			})
			.then(config => {
				console.log(config)
				this.setState({...config})
			})
			.catch(console.error)
	}

	handleMenuChange = (treeData) => {
		console.log(treeData)
		const menu = convert(treeData)
		console.log(menu)
		return this.setState({menu})
	}


	handleMenuConfirm = (treeData) => {
		fetch('/api/config/menu', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.menu)
		}).then(res => this.setState({menu: this.state.menu}))
	}

	handleAddMenuItem = (e) => {
		e.preventDefault()
		const { name, link } = e.target
		const item = { name: name.value, link: link.value }
		console.log(item)
		fetch('/api/config/menu/item', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		}).then(item => item.json())
			.then(newItem => {
				console.log(newItem)
				this.setState({
					menu: [...this.state.menu, newItem]
				})
			})
			.catch(err => console.log(err))
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