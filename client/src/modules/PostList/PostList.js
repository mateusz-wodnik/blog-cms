import React, { Component } from 'react';
import './PostList.css'
import Post from './Post';

class PostList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [],
			render: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/posts?short=true')
			.then(res => res.json())
			.then(res => {
				const render = res.slice(0, 3)
				this.setState({
					posts: res,
					render
				})
			})
			.catch(err => console.log(err))
	}

	handleSelect = (e) => {
		const range = e.target.dataset.postsRange
		const render = this.state.posts.slice(range - 3, range)
		this.setState({render})
	}

	renderButtons = () => {
		const render = []
		for(let i = 1; i < (this.state.posts.length + 3) / 3; i++){
			render.push(<button key={i} className="post-list__btn" data-posts-range={i * 3} onClick={this.handleSelect}>{i}</button>)
		}
		return render
	}

	render() {
		return (
			<section className="blog__post-list post-list">
				<button onClick={() => console.log(this.state)}>elo</button>
				{this.state.render.map((post, idx) =>
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
}

export default PostList
