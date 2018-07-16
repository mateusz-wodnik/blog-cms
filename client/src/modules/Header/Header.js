import React from 'react';
import './Header.css';
import logo from './logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
	<header className="blog__header header">
		<div className="header__top">
			<h5 className="header__caption">To (nie) jest kolejny blog o niczym</h5>
			<div className="header__social">
				<a href="http://www.facebook.com" className="header__icon header__icon--fb"><FontAwesomeIcon icon={faFacebook}/></a>
				<a href="http://www.instagram.com" className="header__icon header__icon--ig"><FontAwesomeIcon icon={faInstagram}/></a>
				<button className="header__icon header__icon--search"><FontAwesomeIcon icon={faSearch}/></button>
			</div>
		</div>
		<img src={logo} alt="" className="header__logo"/>
	</header>
);

export default Header;
