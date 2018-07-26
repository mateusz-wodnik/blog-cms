import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
	<section className="blog__footer footer">
		<p className="footer__copy">2018 © malg0czi. All Rights Reserved | <a href="#" className="footer__privacy">Polityka prywatności</a></p>
		<div className="footer__social">
			<a className="footer__icon" href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
			<a className="footer__icon" href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
		</div>
	</section>
)

export default Footer
