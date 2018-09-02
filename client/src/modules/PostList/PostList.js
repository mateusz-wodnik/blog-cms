import React, { Component } from 'react';
import './PostList.css'
import Post from './Post';
import ModuleHeader from '../../components/ModuleHeader/ModuleHeader'

class PostList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [],
			render: [],
			title: 'Nowe posty'
		}
	}

	componentDidMount() {
		this.handlePostsChange(this.props.match.params.category)
	}

	handlePostsChange = (category) => {
		const query = category ? `&category=${category}` : ''
		fetch(`/api/posts?short=true${query}`)
			.then(res => res.json())
			.then(res => {
				const render = res.slice(0, 3)
				this.setState({
					posts: res,
					render,
					title: category || 'Nowe posty'
				})
			})
			.catch(console.error)
	}

	handleSelect = (e) => {
		const target = e.target
		const range = target.dataset.postsRange
		const render = this.state.posts.slice(range - 3, range)
		this.setState({render}, () => {
			target.closest('#post-list').scrollIntoView({
				behavior: 'smooth'
			})
		})
	}

	componentDidUpdate(prev, now) {
		if(prev.match.params.category !== this.props.match.params.category) {
			this.handlePostsChange(this.props.match.params.category)
		}
	}

	render() {
		const {title, render} = this.state
		return (
			<section id={"post-list"} className="blog__post-list post-list content">
				<ModuleHeader title={title}/>
				{render.map((post, idx) =>
					<Post
						key={idx}
						title={post.title}
						date={post.createdAt}
						comments={post.comments}
						category={post.category}
						img={post.img}
						id={post._id}
					/>)}
					<div className="post-list__select">
						{this.renderButtons()}
					</div>
			</section>
		)
	}

	renderButtons = () => {
		const buttons = []
		for(let i = 1; i < (this.state.posts.length + 3) / 3; i++){
			buttons.push(<button key={i} className="post-list__btn" data-posts-range={i * 3} onClick={this.handleSelect}>{i}</button>)
		}
		return buttons
	}
}

export default PostList
