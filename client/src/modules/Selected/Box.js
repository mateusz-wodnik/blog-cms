import React from 'react';
import './Box.css'

const Box = ({img, title, date}) => (
	<div className="box">
		<img className="box__img" src={img} alt="promoted post" />
		<h3 className="box__title">{title}</h3>
		<p className="box__date">{date}</p>
	</div>
);

export default Box;
