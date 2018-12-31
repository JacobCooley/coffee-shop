import React from 'react';
import './Buttons.scss'

const Button = ({ className, disabled, text, onClick }) => (
	<>
		<button className={`button ${className ? className : ''} ${disabled ? 'disabled' : ''}`} onClick={onClick}>{text}</button>
	</>
)

export default Button;