import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import TokenLauncher from '@assets/icons/TokenLauncherGreen.svg'
import './Header.scss'

const HeaderComponent = () => {
	const openHamburger = () => {
		const x = document.getElementById("links");
		if (x.style.display === "flex") {
			x.style.display = "none";
		} else {
			x.style.display = "flex";
		}
	}
	
	return (
		<header>
			<img style={{ height: '50px', alignSelf: 'center' }} src={TokenLauncher} />
			<nav className='nav' id='desktop'>
				<div><Link to='/'>Home</Link></div>
				<div><Link to='/dapps'>Create</Link></div>
			</nav>
			<nav className='nav' id='mobile'>
				<ul onClick={() => openHamburger()} id='links'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/dapps'>Create</Link></li>
				</ul>
				<FaBars onClick={() => openHamburger()}/>
			</nav>
		</header>
	)
}

export default HeaderComponent