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
		let fileName  = ''
		switch (name) {
			case 'logo':
				fileName = 'logo.jpg'
				break
			case 'icon':
				fileName = 'icon.png'
				break
			case 'avatar':
				fileName = 'avatar.jpg'
				break
		}
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
		const { menuData } = this.state
		const { handleImage } = this
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
					<div className="config__logo form-group">
						<label htmlFor="#icon">Admin avatar</label>
						<div
							className="config__image"
							style={{backgroundImage: 'url(/images/avatar.jpg)'}}>
							<input type="file"
										 className="form-control-file"
										 id="avatar"
										 name="avatar"
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
