import React from 'react';
import { Link } from 'react-router-dom'
import './Box.css'

const Box = ({img, title, date, id}) => (
	<div className="box">
		<Link to={`/${id}`}>
			<img className="box__img" src={`${img}`} alt="promoted post" />
		</Link>
		<h3 className="box__title">{title}</h3>
		<p className="box__date">{date}</p>
	</div>
);

export default Box;
