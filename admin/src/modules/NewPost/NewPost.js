import React, { Component } from 'react';
import './NewPost.css'
import Form from './components/Form/Form'
import { Editor } from '@tinymce/tinymce-react'

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
				content: ""
			}
		}
	}

	handlerPost = (e) => {
		const { form, name, value, checked } = e.target
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
		return (
			<main className="new-post">
				<section className="new-post__add">
					<Form categories={categories} postCategories={postCategories} selected={false} carousel={false} handler={this.handlerPost}/>
					<Editor
						onEditorChange={this.handleEditorChange}
					/>
				</section>
				<section className="new-post__live">

				</section>
			</main>
		)
	}
}

export default NewPost;


// Fetch from blog.config.categories
const categories = [
		'cat1',
		'cat2',
		'cat3',
		'cat4',
		'cat5',
		'cat6',
]

// Fetch from post.categories (for edit post purpose)
const postCategories = []
