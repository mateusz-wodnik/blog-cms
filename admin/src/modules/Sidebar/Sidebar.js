import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faComments, faChartBar, faCalendar, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'

const Sidebar = () => (
	<Fragment>
		<input type="checkbox" id="toggleSidebar"/>
		<aside className="sidebar d-flex flex-column text-center">
			<header className="sidebar__top">
				<img src={`/images/logo.jpg`} alt="logo" className="sidebar__logo img-fluid"/>
			</header>
			<nav className="sidebar__nav nav flex-column">
				<NavLink to={`/admin/new-post`} className="sidebar__link nav-link" activeClassName='sidebar__link--active'  ><FontAwesomeIcon icon={faPlus}/></NavLink>
				<NavLink to={`/admin/edit-post`} className="sidebar__link nav-link" activeClassName='sidebar__link--active' ><FontAwesomeIcon icon={faEdit}/></NavLink>
				<NavLink to={`/admin/comments`} className="sidebar__link nav-link" activeClassName='sidebar__link--active' ><FontAwesomeIcon icon={faComments}/></NavLink>
				<NavLink to={`/admin/config`} className="sidebar__link nav-link" activeClassName='sidebar__link--active' ><FontAwesomeIcon icon={faCogs}/></NavLink>
			</nav>
			<footer className="sidebar__bottom nav flex-column mt-auto">
				<NavLink to={`/admin/logout`} className="sidebar__link nav-link" ><FontAwesomeIcon icon={faSignOutAlt}/></NavLink>
			</footer>
		</aside>
	</Fragment>
)

export default Sidebar;
