import React from 'react';
import Box from './Box';
import './Selected.css';
import ModuleHeader from '../../components/ModuleHeader/ModuleHeader';

import selected1 from './selected-1.jpg';
import selected2 from './selected-2.jpg';
import selected3 from './selected-3.jpg';


const data = [
	{
		title: "Niebieska rafa koralowa",
		date: "09.07.2018",
		img: selected1
	},
	{
		title: "Lody jagodowe",
		date: "07.05.2018",
		img: selected2
	},
	{
		title: "Niebieska rafa koralowa",
		date: "15.04.2018",
		img: selected3
	},
];

const Selected = () => (
	<section className="blog__selected selected">
		<ModuleHeader title={"Polecane posty"} />
		{data.map(item => <Box img={item.img} title={item.title} date={item.date}/>)}
	</section>
);

export default Selected;
