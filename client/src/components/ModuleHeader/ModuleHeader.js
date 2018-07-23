import React from 'react';
import hr from './hr.png'
import './ModuleHeader.css'

const ModuleHeader = ({title}) => (
	<header className="module-header">
		<h2 className="module-header__title">{title}</h2>
		<img src={hr} alt="horizontal line"/>
	</header>
)

export default ModuleHeader
