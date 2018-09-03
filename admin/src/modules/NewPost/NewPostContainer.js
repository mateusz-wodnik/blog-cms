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
		},
		isEdited: false
	}

	handleEditorChange = (content) => {
		this.setState({ post: { ...this.state.post, content }, isEdited: true })
	}

	handleEditorInstance = (editor) => {
		this.setState({ activeEditor: editor })
	}

	// Updating state.post for live preview
	handleForm = (e) => {
		const { form, name, value, checked, files, id } = e.target
		const update = { isEdited: true }
		switch(name) {
			case "next":
			case "prev":
				const output = {
					name: form[name][0].value,
					link: form[name][1].value
				}
				update.post = {...this.state.post, [name]: output}
				break;
			// Update post main image, and inject this image as DataURL to image input background.
			case "img":
				update.post = {...this.state.post, img: files[0]}
				const target = e.target
				const fReader = new FileReader()
				fReader.onload = () => {
					document.querySelector('#headerImage').style.backgroundImage = `url(${fReader.result})`;
					target.parentNode.style.background = `url(${fReader.result})`;
				}
				fReader.readAsDataURL(files[0])
				break;
			// Update post categories
			case "categories":
				let categories = []
				if(checked) {
					// Add new category
					categories = [...this.state.post.categories, id]
				} else {
					// Remove category
					categories = this.state.post.categories.filter(cat => cat !== id)
				}
				update.post = { ...this.state.post, categories }
				break;
			case "newCategory":
				if(checked) {
					this.props.handleNewCategory(form[name][1].value)
					form[name][1].value = ''
					e.target.checked = false
				}
				break;
			default:
				update.post = { ...this.state.post, [name]: value === "on" ? checked : value } 
		}
		this.setState(update)
	}
	
	// tinyMCE custom images upload handler
	imagesUploadHandler = (blobInfo, success, failure) => {
		const img = new FormData()
		img.append('image', blobInfo.blob(), blobInfo.filename())
		fetch(`/api/posts/image`, {
			method: 'POST',
			body: img
		}).then(res => res.json())
			// "success" and "failure" is tinyMCE internal hooks
			.then(path => success(path))
			.catch(err => failure(err))
	}

	// Save post to database
	handleSave = () => {
		const body = new FormData()
		body.append('image', this.state.post.img)
		body.append('post', JSON.stringify(this.state.post))
		
		// If id exist it means that we are updating existing post and sending PUT request, otherwise we are creating new post and sending POST request
		const id = this.state.post._id || ''
		fetch(`/api/posts/${id}`, {
			method: id ? "PUT" : "POST",
			body
		})
			.then(res => this.setState({isEdited: false}))
			.catch(console.error)
	}

	render() {
		return (
			<NewPost
				post={this.state.post}
				methods={this}
				allCategories={this.props.categories}
				isEdited={this.state.isEdited}
			/>
		)
	}

	componentDidMount = () => {
		if(this.props.match.path === '/admin/edit-post/:id') {
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
					console.error(err);
				})
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		// Load content into TinyMCE after plugin initialize
		if(prevState.activeEditor !== this.state.activeEditor) {
			this.state.activeEditor.setContent(this.state.post.content)
		}
	}
}

export default NewPostContainer;
