import React, { Component } from 'react';
import './NewPost.css'
import NewPost from './NewPost'

class NewPostContainer extends Component {
	state = {
		post: {
			title: "",
			categories: [],
			featured: false,
			slider: false,
			img: "",
			content: "",
			comments: [],
			date: "",
			next: {
				link: '',
				name: ''
			},
			prev: {
				link: '',
				name: ''
			},
		}
	}

	componentDidMount = () => {
		if(this.props.post && this.props.post.title) this.setState({post: this.props.post})
		if(this.props.match.path === '/edit-post/:id') {
			fetch(`/api/posts/${this.props.match.params.id}`)
				.then(res => res.json())
				.then(post => {
					this.setState({
						post: {...this.state.post, ...post},
						err: false
					})
					document.querySelector('#headerImage').style.backgroundImage = `url(${post.img})`;
				})
				.catch(err => {
					this.setState({post: {}, err: true})
					console.log(err);
				})
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		// Load content into TinyMCE after plugin initialize
		if(prevState.activeEditor !== this.state.activeEditor) {
			this.state.activeEditor.setContent(this.state.post.content)
		}
	}

	handleForm = (e) => {
		const { form, name, value, checked, files } = e.target
		switch(name) {
			case "next":
			case "prev":
				const output = {
					name: form[name][0].value,
					link: form[name][1].value
				}
				return this.setState({ post: {...this.state.post, [name]: output} })
			case "img":
				this.setState({post: {...this.state.post, img: files[0]}})
				const target = e.target
				const fReader = new FileReader()
				fReader.onload = () => {
					document.querySelector('#headerImage').style.backgroundImage = `url(${fReader.result})`;
					target.parentNode.style.background = `url(${fReader.result})`;
				}
				return fReader.readAsDataURL(files[0])
			case "categories":
				const categories = []
				form[name].forEach(cat => {
					if(cat.checked) categories.push(cat.id)
				})
				return this.setState({
					post: { ...this.state.post, categories }
				})
			case "newCategory":
				if(checked) {
					this.props.handleNewCategory(form[name][1].value)
					form[name][1].value = ''
					e.target.checked = false
				}
				break;
			default:
				this.setState({
					post: {
						...this.state.post,
						[name]: value === "on" ? checked : value
					}
				})
		}
	}

	handleEditorChange = (content) => {
		this.setState({
			post: { ...this.state.post, content }
		})
	}

	handleEditorInstance = (editor) => {
		this.setState({ activeEditor: editor })
	}

	handleSave = () => {
		const body = new FormData()
		body.append('image', this.state.post.img)
		body.append('post', JSON.stringify(this.state.post))

		const id = this.state.post._id || ''
		fetch(`/api/posts/${id}`, {
			method: id ? "PUT" : "POST",
			body
		})
	}

	imagesUploadHandler = (blobInfo, success, failure) => {
		const id = this.state.post._id || ''
		const img = new FormData()
		img.append('image', blobInfo.blob(), blobInfo.filename())
		fetch(`/api/posts/${id}`, {
			method: 'POST',
			body: img
		}).then(res => res.json())
			.then(res => success(res))
			.catch(err => failure(err))
	}

	render() {
		return (
			<NewPost
				post={this.state.post}
				methods={this}
				allCategories={this.props.categories}
			/>
		)
	}
}

export default NewPostContainer;
