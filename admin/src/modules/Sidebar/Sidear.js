import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faComments, faChartBar, faCalendar, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'

const Sidebar = () => (
	<aside className="sidebar d-flex flex-column text-center">
		<header className="sidebar__top">
			<img src={`/images/logo.png`} onError={(e) => e.target.src='/images/logo.jpg'} alt="logo" className="sidebar__logo img-fluid"/>
		</header>
		<nav className="sidebar__nav nav flex-column">
			<Link to={`/new-post`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faPlus}/></Link>
			<Link to={`/edit-post`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faEdit}/></Link>
			<Link to={`/comments`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faComments}/></Link>
			<Link to={`/analytics`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faChartBar}/></Link>
			<Link to={`/calendar`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faCalendar}/></Link>
			<Link to={`/config`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faCogs}/></Link>
		</nav>
		<footer className="sidebar__bottom nav flex-column mt-auto">
			<Link to={`/logout`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faSignOutAlt}/></Link>
		</footer>
	</aside>
)

export default Sidebar;
