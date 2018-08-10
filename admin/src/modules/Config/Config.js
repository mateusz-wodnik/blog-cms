import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Config.css'

import Menu from './Menu'
import Tree from './Tree'


class Config extends Component {
	state = {
		img: '',
		logo: '',
		icon: '',
		menuData: [],
		menuItems: []
	}

	componentDidMount = () => {
		fetch('/api/config/menu')
			.then(res => res.json())
			.then(allMenuItems => {
				const menuItems = []
				const menuData = []
				allMenuItems.forEach(item => {
					menuData.push(item)
					if(!item.active) menuItems.push(item)
				})
				this.setState({
					menuItems,
					menuData
				})
			})
			.catch(console.error)
	}

	handleImage = (e) => {
		// const preserve value for FileReader .onload method
		const target = e.target
		const { files, name } = target

		this.setState({img: files[0]})
		const fReader = new FileReader()
		fReader.onload = () => {
			target.parentNode.style.backgroundImage = `url(${fReader.result})`;
		}
		const body = new FormData()
		body.append('logo', files[0], name === 'logo' ? 'logo.jpg' : 'icon.png')

		fetch(`/api/config/images`, {
			method: "POST",
			body
		})
		return fReader.readAsDataURL(files[0])
	}

	handleNewMenuItem = (e) => {
		e.preventDefault()
		const { name, link } = e.target.form
		const body = JSON.stringify({
			name: name.value,
			link: link.value,
		})
		fetch('api/config/menu', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body
		})
			.then(res => res.json())
			.then(item => this.setState({ menuItems: [...this.state.menuItems, item]}))
			.catch(console.error)
	}

	handleMenu = (e) => {
		e.preventDefault()
		const target = e.target
		const { name, link, id, del } = target
		if(del) {
			return fetch(`/api/config/menu/${id}`, {method: "DELETE"})
				.then(res => {
					const menuData = this.state.menuData.filter(item => item._id !== id)
					const menuItems = this.state.menuItems.filter(item => item._id !== id)
					this.setState({menuData, menuItems})
				})
				.catch(console.error)
		}
		const body = JSON.stringify({
			name: name.value,
			link: link.value
		})
		fetch(`/api/config/menu/${id}`, {
			method: "PUT",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body
		})
			.then(res => res.json())
			.then(res => {
				target.add.classList.remove('btn-warning')
				target.remove.textContent = '✔'
			})
			.catch(console.error)
	}

	render() {
		const { menuData, menuItems } = this.state
		const { handleNewMenuItem, handleMenu, handleImage } = this
		return(
			<main className="admin__config config">
				<form className="config__form" >
					<div className="config__logo form-group">
						<label htmlFor="#logo">Site logo</label>
						<div
							className="config__image"
							style={{backgroundImage: 'url(/images/logo.jpg)'}}>
							<input type="file"
										 className="form-control-file"
										 id="logo"
										 name="logo"
										 onChange={handleImage}
							/>
						</div>
					</div>
					<div className="config__logo form-group">
						<label htmlFor="#icon">Site icon</label>
						<div
							className="config__image"
							style={{backgroundImage: 'url(/images/icon.png)'}}>
							<input type="file"
										 className="form-control-file"
										 id="icon"
										 name="icon"
										 onChange={handleImage}
							/>
						</div>
					</div>
				</form>
				<section className="mytree">
					<h2>Configure menu</h2>
					<Tree items={menuData}/>
				</section>
			</main>
		)
	}
}

export default Config
