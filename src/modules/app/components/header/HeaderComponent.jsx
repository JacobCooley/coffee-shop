import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import TokenLauncher from '../../../../assets/icons/TokenLauncherGreen.svg'
import './Header.scss'

const HeaderComponent = ({user, logOut}) => {
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
				<div><Link to='/create'>Create</Link></div>
				<div><Link to='/contracts'>Contracts</Link></div>
				{user ?
					<div onClick={logOut}><Link to='/'>Logout</Link></div>
					:
					<div><Link to='/login'>Login</Link></div>
				}
			</nav>
			<nav className='nav' id='mobile'>
				<ul onClick={() => openHamburger()} id='links'>
					<Link to={'/'}><li>Home</li></Link>
					<Link to={'/create'}><li>Create</li></Link>
					<Link to={'/contracts'}><li>Contracts</li></Link>
					{ user ?
						<Link onClick={logOut} to={'/'}><li>Logout</li></Link>
						:
						<Link to={'/login'}><li>Login</li></Link>
					}
				</ul>
				<FaBars onClick={() => openHamburger()}/>
			</nav>
		</header>
	)
}

export default HeaderComponent