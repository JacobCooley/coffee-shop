import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaTelegramPlane, FaLinkedin, FaSlack } from 'react-icons/fa';
import './Footer.scss'

const Footer = () => {
	return (
		<footer>
			<div className='social-media'>
				<a><FaFacebookSquare /></a>
				<a><FaTwitterSquare /></a>
				<a><FaTelegramPlane /></a>
				<a><FaSlack /></a>
				<a target='_blank' href='https://www.linkedin.com/in/jacob-cooley-03a1396b/'><FaLinkedin /></a>
			</div>
			<div className='site-info'>
				<a href="mailto:j.cooley42@gmail.com?Subject=Greetings!" target="_top">Contact</a>
				<div>Token Launcher &copy; 2019</div>
			</div>
		</footer>
	)
}

export default Footer