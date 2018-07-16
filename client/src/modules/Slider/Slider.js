import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import slider1 from './slider-1.jpg'
import slider2 from './slider-2.jpeg'
import slider3 from './slider-3.jpg'

const data = [
	{
		title: 'Torebka koszyk - letni must have!',
		src: slider1
	},
	{
		title: 'Strój kąpielowy dla każdego typu sylwetki',
		src: slider2
	},
	{
		title: 'Niebieska rafa koralowa',
		src: slider3
	},
]


const Slider = () => (
	<section className="blog__slider slider">
		<Carousel showThumbs={false} showStatus={false}>
			{data.map((img, idx) => (
				<div key={idx} className="slider__item">
					<div className="slider__caption">
						<h3 className="slider__title">{img.title}</h3>
						<button className="slider__btn">Więcej...</button>
					</div>
					<img src={img.src} className="slider__img"/>
				</div>
			))}
		</Carousel>
	</section>
)

export default Slider;
