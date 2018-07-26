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
				selected: false,
				carousel: false,
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
		if(this.props.post) this.setState({post: this.props.post})
	}

	handlerPost = (e) => {
		const { form, name, value, checked } = e.target
		if(name === 'next' || name === 'prev') {
			const output = {
				name: form.elements[name][0].value,
				link: form.elements[name][1].value
			}
			this.setState({ post: {...this.state.post, [name]: output} })
			return
		}
		if(name === 'categories') {
			const categories = []
			form.elements[name].forEach(cat => {
				if(cat.checked) categories.push(cat.id)
			})
			return this.setState({
				post: { ...this.state.post, categories }
			})
		}
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
		const { categories } = this.props
		return (
			<main className="new-post">
				<section className="new-post__add">
					<Form
						categories={categories}
						postCategories={this.state.post.categories}
						selected={false}
						carousel={false}
						handler={this.handlerPost}
					/>
					<Editor
						onEditorChange={this.handleEditorChange}
						plugins="image"
						init={{
							theme: `modern`,
							height: '500px'
						}}
					/>
					<button onClick={() => console.log(this.state.post)}>elo</button>
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
