import React, { Component } from 'react';
import './Config.css'


class Config extends Component {
	state = {
		img: ''
	}

	handleImage= (e) => {
		// const preserve value for FileReader .onload method
		const target = e.target
		const { files, name } = e.target

		this.setState({img: files[0]})
		const fReader = new FileReader()
		fReader.onload = () => {
			target.nextElementSibling.style.backgroundImage = `url(${fReader.result})`;
		}
		const body = new FormData()
		console.log(name)
		body.append('logo', files[0], name === 'logo' ? 'logo.jpg' : 'icon.png')

		fetch(`/api/config`, {
			method: "POST",
			body
		})
		return fReader.readAsDataURL(files[0])
	}

	render() {
		return(
			<main className="admin__config config">
				<form className="new-post__form" >
					<div className="config__logo form-group">
						<input type="file"
									 className="form-control-file"
									 id="logo"
									 name="logo"
									 onChange={this.handleImage}
						/>
						<div
							className="config__image"
							style={{backgroundImage: 'url(/images/logo.jpg)'}}></div>
					</div>
					<div className="config__logo form-group">
						<input type="file"
									 className="form-control-file"
									 id="icon"
									 name="icon"
									 onChange={this.handleImage}
						/>
						<div
							className="config__image"
							style={{backgroundImage: 'url(/images/icon.png)'}}></div>
					</div>
				</form>
			</main>
		)
	}
}

export default Config
