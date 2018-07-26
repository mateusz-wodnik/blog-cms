import React, { Component } from 'react';
import './NewPost.css'
import Form from './components/Form/Form'
import { Editor } from '@tinymce/tinymce-react'
import Header from './components/Live/Header/Header'
import Navigation from './components/Live/Navigation/Navigation'
import Post from './components/Live/Post/Post'
import Footer from './components/Live/Footer/Footer'

class NewPost extends Component {
	constructor (props) {
		super(props)
		this.state = {
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
	}

	componentDidMount = () => {
		if(this.props.post && this.props.post.title) this.setState({post: this.props.post})
		if(this.props.match.path === '/edit-post/:id') {
			fetch(`/api/posts/${this.props.match.params.id}`)
				.then(res => res.json())
				.then(post => {
					this.setState({post, err: false})
				})
				.catch(err => {
					this.setState({post: {}, err: true})
					console.log(err)
				})
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		// Load content into TinyMCE after plugin initialize
		if(prevState.activeEditor !== this.state.activeEditor) {
			this.state.activeEditor.setContent(this.state.post.content)
		}
	}

	handlerPost = (e) => {
		const { form, name, value, checked } = e.target
		// Handle next and prev change
		if(name === 'next' || name === 'prev') {
			const output = {
				name: form.elements[name][0].value,
				link: form.elements[name][1].value
			}
			this.setState({ post: {...this.state.post, [name]: output} })
			return
		}
		// Handle categories array change
		if(name === 'categories') {
			const categories = []
			form.elements[name].forEach(cat => {
				if(cat.checked) categories.push(cat.id)
			})
			return this.setState({
				post: { ...this.state.post, categories }
			})
		}
		// Handle other properties change
		this.setState({
			post: {
				...this.state.post,
				[name]: value === "on" ? checked : value
			}
		})
	}

	handleEditorChange = (content) => {
		this.setState({
			post: { ...this.state.post, content }
		})
	}

	render() {
		const { featured, slider, categories } = this.state.post
		return (
			<main className="new-post">
				<section className="new-post__add">
					<Form
						categories={this.props.categories}
						postCategories={categories}
						featured={featured}
						slider={slider}
						handler={this.handlerPost}
					/>
					<Editor
						onEditorChange={this.handleEditorChange}
						plugins="image"
						init={{
							theme: `modern`,
							height: '500px',
							init_instance_callback: editor => this.setState({activeEditor: editor}),
						}}
					/>
				</section>
				<section className="new-post__live">
					<Header />
					<Navigation/>
					<Post post={this.state.post}/>
					<Footer/>
				</section>
			</main>
		)
	}
}

export default NewPost;
