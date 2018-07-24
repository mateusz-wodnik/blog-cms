import React, { Component } from 'react';
import Box from './Box';
import './Selected.css';
import ModuleHeader from '../../components/ModuleHeader/ModuleHeader';

class Selected extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selected: []
		}
	}
	componentDidMount() {
		fetch('http://localhost:3000/api/posts?short=true&featured=true')
			.then(res => res.json())
			.then(selected => this.setState({selected}))
	}
	render() {
		const { selected } = this.state
		return (
			<section className="blog__selected selected">
				<ModuleHeader title={"Polecane posty"} />
				{selected.map((post, idx) =>
					<Box
						key={idx}
						img={post.img}
						title={post.title}
						date={post.createdAt}
						id={post._id}
					/>
				)}
			</section>
		)
	}
}

export default Selected;
