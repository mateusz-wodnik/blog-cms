import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Slider extends Component {
	constructor (props) {
		super(props)
		this.state = {
			slider: []
		}
	}
	componentDidMount() {
		fetch(`/api/posts?short=true&slider=true`)
			.then(res => res.json())
			.then(slider => {
				console.log(slider)
				this.setState({slider})
			})
			.catch(err => console.log(err))
	}

	render() {
		const { slider } = this.state
		console.log(slider)
		return (
			<section className="blog__slider slider">
				<Carousel className="slider__wrapper" showThumbs={false} showStatus={false}>
					{slider.map((slide, idx) => (
						<div key={idx} className="slider__item">
							<div className="slider__caption">
								<h3 className="slider__title">{slide.title}</h3>
								<button className="slider__btn">Więcej...</button>
							</div>
							<img src={`${slide.img}`} alt="slider" className="slider__img"/>
						</div>
					))}
				</Carousel>
			</section>
		)
	}
}

export default Slider;
