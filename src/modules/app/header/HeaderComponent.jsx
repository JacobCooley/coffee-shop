import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { projectTitle } from '@utils/constants'
import './Header.scss'

const HeaderComponent = () => {
	const path = window.location.pathname.toString()
	return (
		<header>
			<div>{projectTitle}</div>
			<nav>
				<div><Link to='/' className={path === '/' ? 'white' : null}>Home</Link></div>
				<div><Link className={path.includes('/dapps') ? 'white' : null} to='/dapps'>Create</Link></div>
			</nav>
		</header>
	)
}

export default HeaderComponent;