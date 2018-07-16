import React, { Component } from 'react';
import './PostList.css'
import Post from './Post';

import post1 from './post-1.jpg'
import post2 from './post-2.jpg'
import post3 from './post-3.jpg'

class PostList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [...data],
			render: []
		}
	}

	componentDidMount() {
		const render = this.state.posts.slice(0, 3)
		this.setState({render})
	}

	handleSelect = (e) => {
		const range = e.target.dataset.postsRange
		console.log(range)
		const render = this.state.posts.slice(range - 3, range)
		this.setState({
			render
		})
	}

	renderButtons = () => {
		const render = []
		for(let i = 1; i < (this.state.posts.length + 3) / 3; i++){
			render.push(<button className="post-list__btn" data-posts-range={i * 3} onClick={this.handleSelect}>{i}</button>)
		}
		return render
	}

	render() {
		return (
			<section className="blog__post-list post-list">
				{this.state.render.map(post =>
					<Post
						title={post.title}
						date={post.date}
						comments={post.comments}
						category={post.category}
						img={post.img}
					/>)}
					<div className="post-list__select">
						{this.renderButtons()}
					</div>
			</section>
		)
	}
}

export default PostList

const data = [
	{
		"title": "Niebieska rafa koralowa",
		"category": "moda",
		"date": "9.07.2018",
		"comments": 4,
		"img": post1
	},
	{
		"title": "Czy warto jechać do... Bratysławy?",
		"category": "moda",
		"date": "6.07.2018",
		"comments": 3,
		"img": post2
	},
	{
		"title": "Czy warto jechać do... Bratysławy?",
		"category": "moda",
		"date": "6.07.2018",
		"comments": 3,
		"img": post2
	},
	{
		"title": "Czy warto jechać do... Bratysławy?",
		"category": "moda",
		"date": "6.07.2018",
		"comments": 3,
		"img": post2
	},
	{
		"title": "Czy warto jechać do... Bratysławy?",
		"category": "moda",
		"date": "6.07.2018",
		"comments": 3,
		"img": post2
	},
	{
		"title": "Czy warto jechać do... Bratysławy?",
		"category": "moda",
		"date": "6.07.2018",
		"comments": 3,
		"img": post2
	},
	{
		"title": "Strój kąpielowy dla każdego typu sylwetki",
		"category": "moda",
		"date": "11.05.2018",
		"comments": 8,
		"img": post3
	}
]
