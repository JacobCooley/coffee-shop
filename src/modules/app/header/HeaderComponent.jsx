import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { projectTitle } from '@utils/constants'
import TokenLauncher from '@assets/icons/TokenLauncherGreen.svg'
import './Header.scss'

const HeaderComponent = () => {
	return (
		<header>
			<img style={{height: '50px', alignSelf: 'center'}} src={TokenLauncher} />
			<nav>
				<div><Link to='/'>Home</Link></div>
				<div><Link to='/dapps'>Create</Link></div>
			</nav>
		</header>
	)
}

export default HeaderComponent;