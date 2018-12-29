import React from 'react';
import './Buttons.scss'

const Button = ({ disabled, text, onClick }) => (
	<>
		<button className={`button ${disabled ? 'disabled' : ''}`} onClick={onClick}>{text}</button>
	</>
)

export default Button;